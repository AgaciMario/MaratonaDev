// importando o express para o projeto.
const express = require("express")
const server = express()

// configurando o servidor para apresentar arquivos estáticos.
server.use(express.static('public'))

// habilitando o body do formulário.
server.use(express.urlencoded( { extended: true } ))

//configurar a conecção com o banco de dados.
const Pool = require("pg").Pool
const bd = new Pool({
    user: 'postgres',
    password: '8797',
    host: 'localhost',
    port: 5433,
    database: 'Doe',
})

// configurando a template engine.
const nunjucks = require("nunjucks");
nunjucks.configure("./", { // ./ indica a do projeto.
    express: server, // indicando qual variável guarda o express no projeto.
    noCache: true,
})

// configurar a apresentação da pagina.
server.get("/", function(req, res){
    // req -> requisição, res -> resposta.as
    bd.query("SELECT * FROM donors", function(err, result){
        if(err) return res.send(err.message)

        const donors = result.rows

        res.render("index.html", { donors })
    })    
})

server.post("/", function(req, res) {
    // pega os dados do formulário.
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if(name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.")
    }

    // inserindo valores no banco de dados.
    const query = `
        INSERT INTO donors ("name", "email", "blood")
        VALUES ($1, $2, $3)`
    
    const values = [name, email, blood]

    bd.query(query, values, function(err) {
        if(err) return res.send(err.message)

        // redireciona para a pagina inicial.
        res.redirect("./")
    })
    
})

// ligar o servidor e permitir o acesso na porta 3000.
server.listen(3000, function() {
    console.log("servidor iniciado.")
})