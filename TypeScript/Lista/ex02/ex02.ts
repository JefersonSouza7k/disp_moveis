class Filme{
    titulo : string;
    genero : string;
    duracao : number;

    constructor(titulo, genero, duracao){
        this.titulo = titulo;
        this.genero = genero;
        this.duracao = duracao;
    }

    public getTitulo() : string {
        return this.titulo;
    }
    public getGenero() : string {
        return this.genero;
    }
    public getDuracao() : number {
        return this.duracao;
    }

}

class Cliente{
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

class Locacao{
    filmesAlugados : Filme[];
    cliente : Cliente[];

    constructor(){
        this.filmesAlugados = [];
        this.cliente = [];
    }
    public alugarFilme(filme : Filme, cliente) : void {
        this.filmesAlugados.push(filme, cliente);
    }

    public exibirFilmesAlugados() : void {
        console.log(this.filmesAlugados);
    }
}

let filme1 = new Filme("Título 1", "Ação", 2);
let cliente1 = new Cliente("Cliente 1", 20);
let locacao1 = new Locacao();

locacao1.alugarFilme(filme1, cliente1);
locacao1.exibirFilmesAlugados();
