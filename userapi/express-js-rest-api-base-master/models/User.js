var knex = require("../database/connection")
var bcrypt = require("bcrypt")
class User{
    async findAll(){
        try{
            await knex.select(["id","email","role"]).table("users")
            return result
        }catch(err){
            console.log()
            return []
        }
    }

    async findByID(){
         try{
            await knex.select(["id","email","role","name"]).where({id:id}).table("users")
            if(result.length > 0){
                return result[0]
            }else{
                return undefined
            }
        }catch(err){
            console.log()
            return []
        }
    }

    async create(email,password,name){
        try{
            var hash = await bcrypt.hash(password, 10)
            await knex.insert({email,password: hash,name,role: 0}).table("users")
        }catch{
            console.log(err)
        }
    }
    async findEmail(email) {
        try{
            var result = await knex.select("*").from("users").where({email: email})
            if(result.length > 0){
                return true
            }else{
                return false
            }
        }catch(err){
            console.log(err)
            return false
        }
    }
}
module.exports = new User()