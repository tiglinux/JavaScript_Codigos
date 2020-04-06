//Construtor de data.
var data = new Date();
var dia = data.getDate(); // obtem o número do dia.
var ano = data.getFullYear(); // obtem o ano atual de acordo com o relogio local.
var mes = data.getMonth();  //obtem o mês atual de acordo com o relógio local.

let mostrarData = () => { //arrow function
  console.log("Hoje o dia é : " + dia);
  console.log("Hoje o ano é : " + ano);
  console.log("Hoje o mês é "+ (mes+1));

};

mostrarData(); // call the function

console.log(data.toString()); // Retorna em formato toString; Representando um objeto.
