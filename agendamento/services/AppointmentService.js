var Appointment = require("../models/Appointment")
var mongoose = require('mongoose')

const AppoModel = mongoose.model("Appointment", Appointment)

class AppointmentService {
    async Create(name, email, description, cpf, date, time) {
        var newAppo = new AppoModel({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false
        })

        try {
            await newAppo.save()
            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }
    async GetAll(showFinished){
        if(showFinished){
            return await AppoModel.find()
        }else{
            return await AppoModel.find({'finished': false})
        }
    }
}

module.exports = new AppointmentService()
