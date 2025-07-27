const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')
const Resposta = require("./database/Resposta")

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados')
    })
    .catch((msgErro) => {
        console.log('Mensagem de erro')
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id', 'DESC']  //ASC = Crescente
    ]}).then(perguntas => {
          res.render("index", {
            perguntas: perguntas
          })
    })
})

app.get('/perguntar', (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})

app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id
    Pergunta.findOne({
        where: {id: id},
    }).then(pergunta => {
        if(pergunta != undefined) {
            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order:[ 
                    ['id', 'DESC']
                ]
            }).then(respostas => {
                res.render("pergunta", {
                pergunta: pergunta,
                respostas: respostas
                })
            })
           
        } else {
            res.redirect("/")
        }
    })
})

app.post("/responder", (req, res) => {
  const corpo = req.body.corpo;
  const perguntaId = req.body.pergunta;

  if (!corpo || !perguntaId) {
    return res.status(400).send("Corpo da resposta e pergunta são obrigatórios!");
  }
  Resposta.create({
    corpo: corpo,
    perguntaId: perguntaId
  }).then(() => {
    res.redirect("/pergunta/" + perguntaId);
  });
});

app.listen(8085,() => {
    console.log("app rodando")
})