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
  
    socket.on("msg", (data) => {
        socket.broadcast.emit("")
        io.emit("showmsg", data)
        console.log(data)
    })
})
http.listen(3036, () => {
    console.log("app rodando")
})