// Importando o express para o projeto.
const express = require("express")
const server = express()

// Configurando o servidor para apresentar arquivos estáticos.
server.use(express.static('public'))

// Habilitando o body do formulário.
server.use(express.urlencoded( { extended: true } ))

// Configurar a conecção com o banco de dados.
const Pool = require("pg").Pool
const bd = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
})

// Configurando a template engine.
const nunjucks = require("nunjucks");
nunjucks.configure("./", { // "./" Indica que utilizaremos a pasta padrão do projeto.
    express: server, // Indicando qual variável guarda o express.
    noCache: true,
})

// Configurar a apresentação da página.
server.get("/", function(req, res){
    // req -> requisição, res -> resposta
    bd.query("SELECT * FROM donors", function(err, result){
        if(err) return res.send(err.message)

        const donors = result.rows

        res.render("index.html", { donors })
    })    
})

server.post("/", function(req, res) {
    // Pega os dados do formulário.
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    if(name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios.")
    }

    // Inserindo valores no banco de dados.
    const query = `
        INSERT INTO donors ("name", "email", "blood")
        VALUES ($1, $2, $3)`
    
    const values = [name, email, blood]

    bd.query(query, values, function(err) {
        if(err) return res.send("Não foi possível realizar a operação. "+err.message)

        // Redireciona para a página inicial.
        res.redirect("./")
    })
    
})

// Ligar o servidor e permitir o acesso na porta 3000.
server.listen(3000, function() {
    console.log("servidor iniciado.")
})