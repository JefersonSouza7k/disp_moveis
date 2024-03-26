var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Produto.prototype.getNome = function () {
        return this.nome;
    };
    Produto.prototype.getPreco = function () {
        return this.preco;
    };
    return Produto;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getEndereco = function () {
        return this.endereco;
    };
    return Cliente;
}());
var Pedido = /** @class */ (function () {
    function Pedido() {
        this.produtos = [];
    }
    Pedido.prototype.adicionarProduto = function (produto, quantidade) {
        this.produtos.push({ produto: produto, quantidade: quantidade });
    };
    Pedido.prototype.calcularTotal = function () {
        var total = 0;
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var item = _a[_i];
            total += item.produto.preco * item.quantidade;
        }
        return total;
    };
    Pedido.prototype.finalizarPedido = function () {
        console.log("Resumo do Pedido:");
        console.log("Cliente: ", this.cliente);
        console.log("Produtos:");
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(" - Nome: ", item.produto.nome);
            console.log("   Quantidade: ", item.quantidade);
            console.log("   Valor Unitário: ", item.produto.preco);
        }
        console.log("Total a pagar: R$ ", this.calcularTotal());
    };
    return Pedido;
}());
var produto1 = new Produto("Calça", 200);
var cliente1 = new Cliente("João", "Rua Goiás");
var pedido1 = new Pedido();
pedido1.adicionarProduto(produto1, 2);
pedido1.finalizarPedido();
