const http = require('http'); //WebServer
const fs = require('fs'); //File System
const path = require('path');
const porta = 5000;


http.createServer((req,res) => {
    if(req.url === '/'){
        //return res.end('<h1>Home</h1>');
        fs.readFile(
            path.join(__dirname, 'public','index.html'),(err,conteudo)=>{
                if(err) throw err;
                res.end(conteudo);
            });

    }
    if(req.url === '/contato'){
        //return res.end('<h1>Contato</h1>');
        fs.readFile(
            path.join(__dirname, 'public','contato.html'),(err,conteudo)=>{
                if(err) throw err;
                res.end(conteudo);
            });
    }
}).listen(porta, ()=>console.log('Servidor iniciado na porta '+porta));
