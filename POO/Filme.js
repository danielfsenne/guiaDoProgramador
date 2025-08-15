class Filme{
    constructor(){
        this.titulo = ''
        this.ano = 2000
        this.genero = ''
        this.diretor = ''
        this.atores = []
        this.duracao = 0
    }

    Reproduzir(){
        console.log("Está sendo reproduzido")
    }
    Pausar(){
        console.log("Filme pausado")
    }
    Avançar(){
        console.log("Filme avançando")
    }
    Fechar(){
        console.log("Fechado")
    }

}