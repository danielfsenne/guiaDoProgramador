const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const cookieParser = require("cookie-parser")

const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(cookieParser("hsjjsjsaa"))

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } 
}))

app.use(flash())

app.get("/", (req, res) => {
    res.render("index", { 
        errors: req.flash("errors") 
    })
})

app.post("/form", (req, res) => {
    const { email, nome, pontos } = req.body
    const errors = []

    if (!email || email.trim() === "") {
        errors.push("O email não pode ser vazio")
    }

    if (!nome || nome.trim() === "") {
        errors.push("O nome não pode estar vazio")
    } else if (nome.length < 4) {
        errors.push("O nome é muito pequeno")
    }

    if (!pontos || pontos < 20) {
        errors.push("Você não pode ter menos de 20 pontos")
    }

    if (errors.length > 0) {
        req.flash("errors", errors)
        res.redirect("/")
    } else {
        res.send("SHOW DE BOLA ESSE FORM!!")
    }
})

app.listen(5678, () => {
    console.log("Servidor rodando na porta 5678")
})
