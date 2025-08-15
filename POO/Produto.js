class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.vendido = 0;
    }

    aplicarDesconto(percentual) {
        if (percentual > 0 && percentual <= 100) {
            this.preco -= (this.preco * (percentual / 100));
        }
    }

    reporEstoque(quantidade) {
        if (quantidade > 0) {
            this.estoque += quantidade;
        }
    }

    vender(quantidade) {
        if (quantidade <= this.estoque && quantidade > 0) {
            this.estoque -= quantidade;
            this.vendido += quantidade;
            console.log(`${quantidade} unidade(s) de "${this.nome}" vendida(s)!`);
        } else {
            console.log(`Estoque insuficiente para "${this.nome}".`);
        }
    }

    exibirInfo() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
        console.log(`Estoque: ${this.estoque}`);
        console.log(`Vendidos: ${this.vendido}`);
    }
}

const produto1 = new Produto("Produto Genérico", 100, 50);

produto1.exibirInfo();
produto1.aplicarDesconto(10);
produto1.vender(5);
produto1.reporEstoque(20);
produto1.exibirInfo();
