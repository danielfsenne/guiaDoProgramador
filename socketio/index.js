const { Socket } = require('dgram')
var express = require('express')
var app = express()
var http = require('http').createServer()
var io = require("socket.io")(http)

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index ")
})

io.on("connection", (socket) => {

    socket.on("disconnect", () => {
        console.log("X desconectou:" + socket.id)
    })

    socket.on("boasvindas", (data) => {
        console.log(data)
    })

    socket.on("palavra", (data) => {
        console.log(data)
        socket.emit("resultado", data + " - Guia do Programador")
    })

})
http.listen(3036, () => {
    console.log("app rodando")
})