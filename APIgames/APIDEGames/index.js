const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const jwt = require('jsonwebtoken');

const jwtSecret = "uvhivbovubrevu";

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware de autenticação
function auth(req, res, next){
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const parts = authToken.split(" ");
        if(parts.length === 2){
            const token = parts[1];
            jwt.verify(token, jwtSecret, (err, data) => {
                if(err){
                    return res.status(401).json({err: "Token inválido"});
                }else{
                    req.token = token;
                    req.user = {id: data.id, email: data.email};
                    next();
                }
            });
        }else{
            return res.status(401).json({err: "Token mal formatado"});
        }
    }else{
        return res.status(401).json({err: "Token não fornecido"});
    }
}

var DB = {
    games: [
        { id: 12, title: 'Silent Hill 2', year: 2024, price: 250 },
        { id: 43, title: 'The Evil Within 2', year: 2019, price: 120 },
        { id: 66, title: 'Outlast 2', year: 2017, price: 100 },
        { id: 21, title: 'Alone in the Dark', year: 2023, price: 160 }
    ],
    users: [
        { id: 1, name: 'Daniel', email: 'danielsenne@gmail.com', password: "1234" },
        { id: 20, name: "Tralalelo", email: 'tralalelo@gmail.com', password: "4321" }
    ]
};

app.get("/games", auth, (req, res) => {
    res.status(200).json(DB.games);
});

app.get("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        return res.status(400).json({err: "ID inválido"});
    }
    var id = parseInt(req.params.id);
    var game = DB.games.find(g => g.id === id);

    if(game){
        res.status(200).json(game);
    }else{
        res.status(404).json({err: "Game não encontrado"});
    }
});

app.post("/game", auth, (req, res) => {
    var { title, price, year } = req.body;

    if (!title || !price || !year) {
        return res.status(400).json({err: "Campos inválidos"});
    }

    let newId = DB.games.length > 0 ? DB.games[DB.games.length - 1].id + 1 : 1;

    DB.games.push({ id: newId, title, price, year });

    res.status(200).json({msg: "Game criado com sucesso"});
});

app.delete("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        return res.status(400).json({err: "ID inválido"});
    }
    var id = parseInt(req.params.id);
    var index = DB.games.findIndex(g => g.id === id);

    if(index === -1){
        return res.status(404).json({err: "Game não encontrado"});
    }

    DB.games.splice(index, 1);
    res.status(200).json({msg: "Game deletado com sucesso"});
});

app.put("/game/:id", auth, (req, res) => {
    if(isNaN(req.params.id)){
        return res.status(400).json({err: "ID inválido"});
    }
    var id = parseInt(req.params.id);
    var game = DB.games.find(g => g.id === id);

    if(!game){
        return res.status(404).json({err: "Game não encontrado"});
    }

    var { title, price, year } = req.body;
    if(title) game.title = title;
    if(price) game.price = price;
    if(year) game.year = year;

    res.status(200).json({msg: "Game atualizado com sucesso"});
});

app.post("/auth", (req, res) => {
    var {email, password} = req.body;

    if(!email){
        return res.status(400).json({err: "Email inválido"});
    }

    var user = DB.users.find(u => u.email == email);

    if(user){
        if(user.password == password){
            jwt.sign(
                {id: user.id, email: user.email}, 
                jwtSecret, 
                {expiresIn: '48h'}, 
                (err, token) => {
                    if(err){
                        return res.status(400).json({err: "Falha interna"});
                    }else{
                        return res.status(200).json({token});
                    }
                }
            );
        }else{
            res.status(401).json({err: "Senha incorreta"});
        }
    }else{
        res.status(404).json({err: "Usuário não encontrado"});
    }
});

app.listen(4567, () => {
    console.log('API rodando na porta 4567');
});
