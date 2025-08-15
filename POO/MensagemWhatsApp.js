class Mensagem {
    constructor(id, remetenteId, destinatarioId, tipo, conteudo) {
        this.id = id;
        this.remetenteId = remetenteId;
        this.destinatarioId = destinatarioId;
        this.tipo = tipo;
        this.conteudo = conteudo;
        this.status = "enviada";
        this.horaEnvio = new Date();
        this.reacoes = [];
        this.respostaA = null;
        this.encaminhada = false;
        this.editada = false;
        this.apagada = false;
    }

    marcarComoEntregue() {
        this.status = "entregue";
        this.horaEntrega = new Date();
    }

    marcarComoLida() {
        this.status = "lida";
        this.horaLeitura = new Date();
    }

    adicionarReacao(emoji, usuarioId) {
        this.reacoes.push({ emoji, usuarioId, hora: new Date() });
    }

    editar(novoConteudo) {
        this.conteudo = novoConteudo;
        this.editada = true;
        this.horaEdicao = new Date();
    }

    apagar() {
        this.apagada = true;
        this.conteudo = "Mensagem apagada";
    }
}
