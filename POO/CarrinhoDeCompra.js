class CarrinhoDeCompras {
    constructor() {
        this.itens = []; 
    }

    adicionarProduto(produto, quantidade = 1) {
        if (quantidade <= 0) return;

        const itemExistente = this.itens.find(item => item.produto.nome === produto.nome);
        
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            this.itens.push({ produto, quantidade });
        }

        console.log(`${quantidade} unidade(s) de "${produto.nome}" adicionada(s) ao carrinho.`);
    }

    removerProduto(nomeProduto) {
        const index = this.itens.findIndex(item => item.produto.nome === nomeProduto);
        
        if (index !== -1) {
            console.log(`"${this.itens[index].produto.nome}" removido do carrinho.`);
            this.itens.splice(index, 1);
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado no carrinho.`);
        }
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => {
            return total + (item.produto.preco * item.quantidade);
        }, 0);
    }

    exibirCarrinho() {
        console.log("=== CARRINHO DE COMPRAS ===");
        if (this.itens.length === 0) {
            console.log("O carrinho está vazio.");
            return;
        }
        this.itens.forEach(item => {
            console.log(`${item.quantidade}x ${item.produto.nome} - R$ ${(item.produto.preco * item.quantidade).toFixed(2)}`);
        });
        console.log(`Total: R$ ${this.calcularTotal().toFixed(2)}`);
    }

    finalizarCompra() {
        if (this.itens.length === 0) {
            console.log("Carrinho vazio. Não é possível finalizar a compra.");
            return;
        }

        console.log("Compra finalizada! Itens comprados:");
        this.exibirCarrinho();
        this.itens = []; 
    }
}
