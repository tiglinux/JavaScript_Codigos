//Array são listas
const alunos = [
    'Tiago','Lucas','João','Jorge' // Array do tipo String;
];
//Removendo valor da última posiçao no vetor.
alunos.pop();
//Remove valor da primeira posição do vetor
alunos.shift();
//Imprimindo vetor.
console.log(alunos);
//Primeiro índice
console.log(alunos[0]);

//Adiciona última posição no final do array.
alunos.push('Maria');
//Adicionando no início.
alunos.unshift('Joana');
//Imprimindo vetor na tela com inserção de novo valor.
console.log(alunos);
//Verificando o tamanho do array
console.log(`O tamanho total do array é ${alunos.length} posições.`);

//Fatiando array.
console.log(alunos.slice(0,2)); //Slice fatia array posição de array e strings.

//Mostrando tipo de variavel,array..


