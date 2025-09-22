const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extends: false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

mongoose.connect("mongodb://localhost:27017/agendamento")

app.use(express.static("public"))
app.get("/", (req, res) => {
    res.send("Oi")
})

app.get("/cadastro", (req, res) => {
    res.render("create")
})

app.listen(8080, () => {
    console.log("Funcionando")
})
