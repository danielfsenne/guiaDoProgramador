function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para:${para}
            --------------------------
            ${corpo}
            --------------------------
            De: Daniel`)
            callback("OK",5,"8s")
    }, 8000)
}
enviarEmail("Oi, seja bem vindo ao guia do programador", (status,amount,time) => {
    console.log(`
        Status: ${status}
        -----------------
        Amount: ${amount}
        ----------------
        Time: ${time}`)
})
console.log("Tudo ok")