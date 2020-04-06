//Função sem parâmetro. ( vazio - void)
function saudacao() {
  console.log("Bom dia.");
}

saudacao(); // função vazia(void)

//Função com parâmetro
function mostraNome(nome) {
  console.log(`Seja bem vindo ${nome} :) `);
}

mostraNome("Tiago");

//Retornando valor.

function mostrar() {
  return "Lucas";
}
//Armazenando função em variável.
const mostra = mostrar();
//Call the function
console.log(mostra);

//Observação, tudo que é colocado abaixo da palavra 'return' a engine do JS não executa.

function mostrarIdade(idade) {
  if (idade == 18 || idade > 18) { // se verdade executa.
    return "Maior de idade";
  } else if (idade < 18) { // senão se....
    return "Menor de idade.";
  }
  console.log('Estou sendo executado abaixo dos If..');
}
console.log(mostrarIdade(19));

//função anônima

var raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));

console.log(raiz(81));

//Arrow function

var nome = (nome) =>{
    return `Seu nome é ${nome}`;
}

console.log(nome('Tiago'));