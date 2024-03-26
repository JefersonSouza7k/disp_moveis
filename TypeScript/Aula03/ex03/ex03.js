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
    function Pedido(cliente) {
        this.produtos = [];
        this.cliente = cliente;
    }
    Pedido.prototype.adicionarProduto = function (produto, quantidade) {
        var produtoExiste = this.produtos.find(function (itemArray) { return itemArray.produto === produto; });
        if (produtoExiste) {
            produtoExiste.quantidade += quantidade;
        }
        else {
            this.produtos.push({ produto: produto, quantidade: quantidade });
        }
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
        console.log("Resumo do Pedido: ");
        console.log("Cliente: " + this.cliente.nome);
        console.log("Endereço de entrega: " + this.cliente.endereco);
        console.log("----------------------------");
        console.log("Produtos: ");
        for (var _i = 0, _a = this.produtos; _i < _a.length; _i++) {
            var item = _a[_i];
            var valorTotalItem = item.produto.preco * item.quantidade;
            console.log("".concat(item.produto.preco, " - Quantidade: ").concat(item.quantidade, " - Valor Unit\u00E1rio: R$ ").concat(item.produto.preco.toFixed(2), " - Valor Total: R$ ").concat(valorTotalItem.toFixed(2)));
        }
        console.log("Total do Pedido: R$ " + this.calcularTotal().toFixed(2));
    };
    return Pedido;
}());
var cliente1 = new Cliente("João", "Rua Goiás N 6");
var pedido1 = new Pedido(cliente1);
var produto1 = new Produto("Camiseta", 29.99);
var produto2 = new Produto("Calça Jeans", 49.99);
pedido1.adicionarProduto(produto1, 2);
pedido1.adicionarProduto(produto2, 1);
pedido1.finalizarPedido();
