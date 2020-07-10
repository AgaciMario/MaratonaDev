# MaratonaDev 3° Edição
Projeto da 3ª edição da MaratonaDev,
ministrado por [Mayk Brito](https://github.com/maykbrito), ©[**Rocketseat**](https://rocketseat.com.br/) :rocket:

![Print 01 projeto](https://github.com/AgaciMario/MaratonaDev/blob/master/Prints%20do%20projeto/print_2.png)

## Objetivo
 Facilitar a interação entre as pessoas que querem doar sangue, com os locais onde é realizado a coleta.

## Tecnologias utilizadas
* [NodeJS](https://nodejs.org/en/download/) 
* [PostgreSQL](https://www.postgresql.org/download/)
* [Postbird](https://www.electronjs.org/apps/postbird)

## Download e Configuração
Com as tecologia listadas acima instaladas em sua maquina, baixe o projeto em zip e extraía onde quiser, ou rode o comando abaixo no diretório onde ficará a pasta do projeto.
``` 
git clone https://github.com/AgaciMario/MaratonaDev.git 
```
Abra o postbird e conecte-se ao servidor seu servidor. Caso tenha acabado de instalar o postgres, o login padrão é:
```
Host: localhost
Port: 5432
Username: postgres
Password: postgres
Database: postgres
```
Essa é a base de dados padrão que o arquivo "server.js" irá tentar acessar, caso 
o seu seja diferente você terá que alterar o arquivo "server.js", para se adequar a sua configuração.

Quando estiver conectado ao servidor, no postbird vá em file > "import .sql file", navegue ate a pasta "DB_Backup", selecione o arquivo "Doe.sql" e 
clique em "import file".

## Instalando dependências e inciando o servidor
Acesse a pasta do projeto pelo seu terminal e rode o comando abaixo:
```
npm install
```
quando o processo de instalação acabar rode o comando: 
```
npm start
```
Você deve receber a mensagem **servidor iniciado**, após isso acesse:
```
http://localhost:3000/
```
### Pronto!! o site esta funcionando na sua máquina.
