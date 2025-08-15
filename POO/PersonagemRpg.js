class Personagem {
    constructor(nome, classe, hp, mp, forca, defesa, inteligencia, agilidade) {
        this.nome = nome;
        this.classe = classe;
        this.nivel = 1;
        this.hp = hp;
        this.mp = mp;
        this.forca = forca;
        this.defesa = defesa;
        this.inteligencia = inteligencia;
        this.agilidade = agilidade;
        this.inventario = [];
    }

    atacar(alvo) {
        const dano = Math.max(0, this.forca - alvo.defesa);
        alvo.hp -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }

    defender() {
        const bonus = Math.floor(this.defesa * 0.5);
        this.defesa += bonus;
        console.log(`${this.nome} está defendendo! Defesa aumentada em ${bonus} pontos temporariamente.`);
    }

    usarHabilidade(alvo, custoMana, danoBase) {
        if (this.mp >= custoMana) {
            this.mp -= custoMana;
            const dano = danoBase + this.inteligencia;
            alvo.hp -= dano;
            console.log(`${this.nome} usou uma habilidade em ${alvo.nome} causando ${dano} de dano!`);
        } else {
            console.log(`${this.nome} não tem mana suficiente!`);
        }
    }

    subirNivel() {
        this.nivel++;
        this.hp += 10;
        this.forca += 2;
        this.defesa += 2;
        console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }

    pegarItem(item) {
        this.inventario.push(item);
        console.log(`${this.nome} pegou o item: ${item}`);
    }

    usarItem(item) {
        const index = this.inventario.indexOf(item);
        if (index !== -1) {
            console.log(`${this.nome} usou o item: ${item}`);
            this.inventario.splice(index, 1);
        } else {
            console.log(`${item} não está no inventário de ${this.nome}.`);
        }
    }
}
