class Produto{
    nome : string;
    preco : number

    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    public getNome() : string {
        return this.nome;
    }
    public getPreco() : number {
        return this.preco;
    }
}

class Cliente{
    nome : string;
    endereco : string;

    constructor(nome, endereco){
        this.nome = nome;
        this.endereco = endereco;
    }

    public getNome() : string {
        return this.nome;
    }
    public getEndereco() : string {
        return this.endereco;
    }
}

class Pedido{
    produtos : {produto : Produto, quantidade : number }[] = [];
    cliente : Cliente;

    constructor(cliente : Cliente){
        this.cliente = cliente;
    }

    public adicionarProduto(produto : Produto, quantidade : number) {
        const produtoExiste = this.produtos.find(itemArray => itemArray.produto === produto);
        if (produtoExiste){
            produtoExiste.quantidade += quantidade;
        } else {
            this.produtos.push({produto, quantidade});
        }
    }

     public calcularTotal() : number {
        let total = 0;
        for (const item of this.produtos){
            total += item.produto.preco * item.quantidade;
        }
        return total;
    }

   public finalizarPedido(){
        console.log("Resumo do Pedido: ")
        console.log("Cliente: "+this.cliente.nome);
        console.log("Endereço de entrega: " + this.cliente.endereco);
        console.log("----------------------------")
        console.log("Produtos: ")
        for (const item of this.produtos){
            const valorTotalItem = item.produto.preco * item.quantidade;
            console.log(`${item.produto.preco} - Quantidade: ${item.quantidade} - Valor Unitário: R$ ${item.produto.preco.toFixed(2)} - Valor Total: R$ ${valorTotalItem.toFixed(2)}`);
        }
        console.log("Total do Pedido: R$ " + this.calcularTotal().toFixed(2));        
    }
}

let cliente1 = new Cliente("João", "Rua Goiás N 6");
let pedido1 = new Pedido(cliente1);

let produto1 = new Produto("Camiseta", 29.99);
let produto2 = new Produto("Calça Jeans", 49.99);

pedido1.adicionarProduto(produto1, 2);
pedido1.adicionarProduto(produto2, 1);

pedido1.finalizarPedido();