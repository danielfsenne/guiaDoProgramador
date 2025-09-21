const mongoose = require('mongoose')
const articleModal = require("./article")

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true})

const Article = mongoose.model("Article", articleModal)

Article.findByIdAndDelete("").then(() => {
    console.log("Dado removido")
}).catch(err => {
    console.log(err)
})

Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
})

const artigo = new Article({title: "ASDA", 
    author: "dassdad", 
    body: "sasacdsgt vfvb",
    special: true,
    resume: {
        content: "guhhi vddsw",
        author: "teste"
    }
})

artigo.save().then(() => {
    console.log("Artigo salvo")
}).catch(err => {
    console.log(err)
})