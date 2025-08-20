const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
const jwt = require('jsonwebtoken')

const jwtSecret = "uvhivbovubrevu"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function auth(req, res, next){
    const authToken = req.headers['authorization']
    if(authToken != undefined){
        const bearer = authToken.split('')
        var token = bearer[1]
        jwt.verify(token, jwtSecret,(err, data) => {
            if(err){
                res.status(401)
                res.json({err: "Token Inválido"})
            }else{
                req.token = token
                req.user = {id: data.id, email: data.email}
                next()
            }
        })
    }else{
        res.status(401)
        res.json({err: 'Token Inválido'})
    }
}

var DB = {
    games: [
        {
            id: 12,
            title: 'Silent Hill 2',
            year: 2024,
            price: 250
        },
        {
            id: 43,
            title: 'The Evil Within 2',
            year: 2019,
            price: 120
        },
        {
            id: 66,
            title: 'Outlast 2',
            year: 2017,
            price: 100
        },
        {
            id: 21,
            title: 'Alone in the Dark',
            year: 2023,
            price: 160
        }
    ],
    users: [
        {
            id: 1,
            name: 'Daniel',
            email: 'danielsenne@gmail.com',
            password: 1234
        },{
            id: 20,
            name: "Tralalelo",
            email: 'tralalelo@gmail.com',
            password: 4321
        }
    ]
}

app.get("/games",auth,(req, res) => {
    res.status(200).json(DB.games)
})

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id === id)

        if (game != undefined) {
            res.status(200).json(game)
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/game", (req, res) => {
    var { title, price, year } = req.body

    if (!title || !price || !year) {
        return res.sendStatus(400) 
    }

    let newId = DB.games.length > 0 ? DB.games[DB.games.length - 1].id + 1 : 1

    DB.games.push({
        id: newId,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

app.delete("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var index = DB.games.findIndex(g => g.id === id)

        if (index === -1) {
            res.sendStatus(404)
        } else {
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }
    }
})

app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var game = DB.games.find(g => g.id === id)

        if (game != undefined) {
            var { title, price, year } = req.body

            if (title != undefined) game.title = title
            if (price != undefined) game.price = price
            if (year != undefined) game.year = year

            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/auth", (req, res) => {
    var{email, password} = req.body
    if(email == undefined){ 
        var user = DB.users.find(u => u.email == email)

        if(user != undefined){
            if(user.password == password){
                jwt.sign({id: user.id, email: user.email}, jwtSecret,{expiresIn: '48h'},(err, token) => {
                    if(err){
                        res.status(400)
                        res.json("Falha interna")
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                })

                res.status(200)
                res.json({token: "Token Falso"})
            }else{
                res.status(401)
                res.json({err: 'Erro nas credenciais'})
            }
        }else{
            res.status(404)
            res.json({err:'email enviado não existe na base de dados'})

        }

    }else{
        res.status(400)
        res.json({err: 'email enviado inválido'})
    }
})

app.listen(4567, () => {
    console.log('API rodando na porta 4567 ')
})
