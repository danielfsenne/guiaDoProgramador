class AppointmentFactory {
    Build(simpleAppointment) {
        const day = simpleAppointment.date.getDate()
        const month = simpleAppointment.date.getMonth()
        const year = simpleAppointment.date.getFullYear()

        const hour = parseInt(simpleAppointment.time.split(":")[0])
        const minutes = parseInt(simpleAppointment.time.split(":")[1])

        const startDate = new Date(year, month, day, hour, minutes, 0, 0)
        // startDate.setHours(startDate.getHours() - 3)

        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000) 

        return {
            id: simpleAppointment._id,
            title: `${simpleAppointment.name} - ${simpleAppointment.description}`,
            start: startDate,
            end: endDate
        }
    }
}

module.exports = new AppointmentFactory()
