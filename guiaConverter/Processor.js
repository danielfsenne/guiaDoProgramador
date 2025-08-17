class Processor {
    static Process(data) {
        if (!data) {
            throw new Error("Processor.Process recebeu 'undefined' ou vazio")
        }
        var rows = data.split("\r\n")
        var result = []

        rows.forEach(row => {
            var columns = row.split(";")
            result.push(columns)
        })

        return result
    }
}

module.exports = Processor
