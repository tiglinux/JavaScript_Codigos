//criando objeto em formato JSON
let pessoa = { 
    nome: "Tiago", //Atributo
    idade: 26,
    sobrenome: "Ribeiro",
    mostrar() { //Método
        return `Seu nome é : ${this.nome} e sua idade é ${this.idade} anos`;
    }
};

console.log(pessoa.mostrar());

//Function factory ( cria objetos)
function criaPessoa(nome,sobrenome,idade){
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}

var pessoa1 = criaPessoa('João','da Silva',28);

console.log(pessoa1.nome);