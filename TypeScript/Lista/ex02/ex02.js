var Filme = /** @class */ (function () {
    function Filme(titulo, genero, duracao) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }
    Filme.prototype.getTitulo = function () {
        return this.titulo;
    };
    Filme.prototype.getGenero = function () {
        return this.genero;
    };
    Filme.prototype.getDuracao = function () {
        return this.duracao;
    };
    return Filme;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.getIdade = function () {
        return this.idade;
    };
    return Cliente;
}());
var Locacao = /** @class */ (function () {
    function Locacao() {
        this.filmesAlugados = [];
        this.cliente = [];
    }
    Locacao.prototype.alugarFilme = function (filme, cliente) {
        this.filmesAlugados.push(filme, cliente);
    };
    Locacao.prototype.exibirFilmesAlugados = function () {
        console.log(this.filmesAlugados);
    };
    return Locacao;
}());
var filme1 = new Filme("Título 1", "Ação", 2);
var cliente1 = new Cliente("Cliente 1", 20);
var locacao1 = new Locacao();
locacao1.alugarFilme(filme1, cliente1);
locacao1.exibirFilmesAlugados();
