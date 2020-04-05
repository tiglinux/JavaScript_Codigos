/*
    Coding by : Tiago Ribeiro Santos
    Date: 04/04/2020
    Date time shows in extension Coding in JS.

    email : tiago.programador@hotmail.com
    gitHub : www.github.com/tiglinux
*/

var data = new Date();
var ano = data.getFullYear();
var mes = data.getMonth() + 1;
var dia = data.getDay();
var numDiaMes = data.getDate();
var horas = data.getHours();
var minutos = data.getMinutes();
var segundos = data.getSeconds();

var exibirData = (dia, mes) => {
  switch (dia) {
    case 1:
      nomeDia = "Segunda-feira";
      break;
    case 2:
      nomeDia = "Terça-feira";
      break;
    case 3:
      nomeDia = "Quarta-feira";
      break;
    case 4:
      nomeDia = "Quinta-feira";
      break;
    case 5:
      nomeDia = "Sexta-feira";
      break;
    case 6:
      nomeDia = "Sabádo";
      break;
    case 7:
      nomeDia = "Domingo";
      break;
  }
  switch (mes) {
    case 1:
      nomeMes = "Janeiro";
      break;
    case 2:
      nomeMes = "Fevereiro";
      break;
    case 3:
      nomeMes = "Março";
      break;
    case 4:
      nomeMes = "Abril";
      break;
    case 5:
      nomeMes = "Maio";
      break;
    case 6:
      nomeMes = "Junho";
      break;
    case 7:
      nomeMes = "Julho";
      break;
    case 8:
      nomeMes = "Agosto";
      break;
    case 9:
      nomeMes = "Setembro";
      break;
    case 10:
      nomeMes = "Outubro";
      break;
    case 11:
      nomeMes = "Novembro";
      break;
    case 12:
      nomeMes = "Dezembro";
      break;
  }
  console.log(`${nomeDia},${numDiaMes} de ${nomeMes} de ${ano} ${horas}:${minutos}`);
};

exibirData(dia, mes);
