var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Usuario.prototype.getNome = function () {
        return this.nome;
    };
    Usuario.prototype.getIdade = function () {
        return this.idade;
    };
    return Usuario;
}());
var Biblioteca = /** @class */ (function () {
    function Biblioteca() {
        this.acervo = [];
        this.usuarios = [];
    }
    Biblioteca.prototype.adicionarLivro = function (livro) {
        this.acervo.push(livro);
    };
    Biblioteca.prototype.adicionarUsuario = function (usuario) {
        this.usuarios.push(usuario);
    };
    Biblioteca.prototype.emprestarLivro = function (livro, usuario) {
        if ((this.acervo.some(function (liv) { return liv === livro; }) && (this.usuarios.some(function (usu) { return usu === usuario; })))) {
            console.log("Empréstimo realizado com sucesso!");
        }
        else {
            console.log("Livro e/ou usuário não existem na biblioteca!");
        }
    };
    return Biblioteca;
}());
var livro1 = new Livro("Titulo A", "Autor A", 1999);
var usuario1 = new Usuario("Usuario A", 20);
var usuario2 = new Usuario("Usuario B", 30);
var biblioteca1 = new Biblioteca();
biblioteca1.adicionarLivro(livro1);
biblioteca1.adicionarUsuario(usuario1);
biblioteca1.emprestarLivro(livro1, usuario2);
