interface parametros {
    n1 : number,
    n2 : number
}

function soma(nums : parametros){
    console.log(nums.n1 + nums.n2);
}

let numerosAleatorios : parametros = {
    n1 : 10,
    n2 : 20
}

console.log(soma(numerosAleatorios));