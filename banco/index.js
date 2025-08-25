var database = require('./database')

var dados = [
  { name: "Sea of Thieves", price: 50.67 },
  { name: "Silent Hill 2", price: 60 }
]

database.insert(dados).into("games")
  .then(() => console.log("Games inseridos com sucesso!"))
  .catch(err => console.log(err))

database.select(["idgames", "price"]).table("games")
  .then(data => console.log("Lista de games:", data))
  .catch(err => console.log(err))

database.insert({ name: "Mists of noyah", price: 26 }).into("games")
  .then(() => {
    return database.select(["idgames", "price"]).table("games")
  })
  .then(data => console.log("Lista atualizada:", data))
  .catch(err => console.log(err))

 database.select()
    .whereRaw("name = 'Mists of Noyah'OR price > 50")
    .table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })

database.where({idgames: 3}).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

database.where({idgames: 5}).update({price: 20}).table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

database.select().table("games").orderBy("price", "desc").then( data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

database.insert({
    name: "Blizzard",
    game_id: 5
}).table("estudios").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

database.select().table(["games.*","estudios.name as estudio_name"]).innerJoin("estudios","estudios.game_id","games.id").where("games.id",5).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})