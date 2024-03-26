class Livro {
    titulo : string;
    autor : string;
    anoPublicacao : number

    constructor(titulo, autor, anoPublicacao){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao
    }

    public getTitulo () : string {
        return this.titulo;
    }
    public getAutor() : string {
        return this.autor;
    }
    public getAnoPublicacao() : number {
        return this.anoPublicacao;
    }

}

class Usuario {
    nome : string;
    idade : number;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    public getNome() : string {
        return this.nome;
    }
    public getIdade() : number {
        return this.idade;
    }

}

class Biblioteca {
    acervo : Livro[];
    usuarios : Usuario[];

    constructor(){
        this.acervo = [];
        this.usuarios = [];
    }

    public adicionarLivro(livro : Livro){
        this.acervo.push(livro);
    }

    public adicionarUsuario(usuario : Usuario){
        this.usuarios.push(usuario);
    }

    public emprestarLivro(livro : Livro, usuario : Usuario){

        if((this.acervo.some(liv => liv === livro) && (this.usuarios.some(usu => usu === usuario)))){
            console.log("Empréstimo realizado com sucesso!");
        } else {
            console.log("Livro e/ou usuário não existem na biblioteca!");
        }

    }
}

let livro1 = new Livro("Titulo A", "Autor A", 1999);
let usuario1 = new Usuario("Usuario A", 20);
let usuario2 = new Usuario("Usuario B", 30);
let biblioteca1 = new Biblioteca();

biblioteca1.adicionarLivro(livro1);
biblioteca1.adicionarUsuario(usuario1);
biblioteca1.emprestarLivro(livro1, usuario2);

