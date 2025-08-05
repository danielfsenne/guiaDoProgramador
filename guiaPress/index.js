const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const connection = require("./database/database")

const categoriesConntoler = require("./categories/CategoriesControler")
const articlesContoller = require("./articles/ArticlesContoller")
const usersController = require("./users/UserController")

const Article = require("./articles/Article")
const Category = require("./categories/Category")
const User = require("./users/User")
const { where } = require("sequelize")

app.set('view engine', 'ejs')

app.use(session({
    secret: "qualquercoisa", cookie: {maxAge: 30000}
}))

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    })
    .catch((error) => {
        console.log(error)
    })

app.use("/", categoriesConntoler)
app.use("/", articlesContoller)
app.use("/", usersController)

app.get("/", (req, res) => {

    Article.findAll().then(articles => {
        limit: 4
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories})
        })
    })
})

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;

    Category.findOne({
        where: { slug: slug },
        include: [{ model: Article }]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render("index", {
                    articles: category.articles,
                    categories: categories
                });
            });
        } else {
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    });
});

app.listen(8087, () => {
    console.log("O servidor está rodando")
})