var jwt = require("jsonwebtoken")
var secret = "sdcsdncdcbdsyuiiuhui"

module.exports = function(req,res,next){
    const authToken = req.headers['authorization']

    if(authToken != undefined){
        const bearer = authToken.split(' ')
        var token = bearer[1]
        jwt.verify(token,secret)
        console.log(decode)
        next()
    }else{
        res.status(403)
        res.send("Você não está autenticado")
        return
    }
}