const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
    ]
}

app.get("/games", (req, res) => {
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

app.listen(4567, () => {
    console.log('API rodando na porta 4567 ')
})
