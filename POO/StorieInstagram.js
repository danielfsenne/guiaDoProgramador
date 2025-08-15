class Storie {
  constructor(id, autorId, tipo, conteudoUrl) {
    this.id = id;
    this.autorId = autorId;
    this.tipo = tipo;
    this.conteudoUrl = conteudoUrl;
    this.thumbnailUrl = null;
    this.duracao = tipo === 'video' ? 15 : 5;
    this.legenda = '';
    this.stickers = [];
    this.privacidade = 'public';
    this.vistos = new Set();
    this.respostas = [];
    this.engajamentos = {};
    this.criadoEm = new Date();
    this.expiraEm = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
    this.arquivado = false;
  }

  adicionarSticker(sticker) {
    this.stickers.push(sticker);
  }

  aplicarFiltro(filtro) {
    this.filtro = filtro;
  }

  publicar() {
    this.publicado = true;
    this.expiraEm = new Date(Date.now() + 24 * 60 * 60 * 1000);
  }

  visualizar(usuarioId) {
    this.vistos.add(usuarioId);
  }

  responder(usuarioId, mensagem) {
    this.respostas.push({ usuarioId, mensagem, hora: new Date() });
  }

  registrarInteracao(tipo, dados) {
    if (!this.engajamentos[tipo]) this.engajamentos[tipo] = [];
    this.engajamentos[tipo].push({ dados, hora: new Date() });
  }

  arquivar() {
    this.arquivado = true;
  }

  remover() {
    this.removido = true;
  }

  analytics() {
    return {
      vistas: this.vistos.size,
      respostas: this.respostas.length,
      engajos: Object.keys(this.engajamentos).reduce((acc, k) => acc + this.engajamentos[k].length, 0)
    };
  }
}
