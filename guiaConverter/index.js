const fs = require('fs')

fs.readFile('./daniell.senne', {encoding: 'utf-8'},(erro, dados) => {
    if(erro){
        console.log('Ocorreu uma falha!!')
    }else{
        console.log(dados)
    }
})

fs.writeFile('./daniell.senne', "Novo contúdo no arquivo",(err) => {
    if(err){
        console.log('Erro inesperaddo')
    }
})

fs.readFile("./usuario.json", {encoding: 'utf-8'},(erro, dados) => {
    if(erro){
        console.log('Um erro aconteceu')
    }else{
        var conteudo = JSON.parse(dados)
        console.log(conteudo)
    }
})