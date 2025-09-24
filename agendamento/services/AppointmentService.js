var Appointment = require("../models/Appointment")
var mongoose = require('mongoose')
var AppointmentFactory = require("../factories/AppointmentFactory")

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
            var appos =  await AppoModel.find({'finished': false})
            var appointments = []

            appos.forEach(appointment => {
                if(appointment.date != undefined){
                    appointments.push(AppointmentFactory.Build(appointment) )
                }
            })
            return appointments
        }
    }
}

module.exports = new AppointmentService()
