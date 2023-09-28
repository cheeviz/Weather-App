export function dataBuilder(d) {
  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let dias = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  let dia = dias[d.getDay()];
  let date = d.getDate();
  let mes = meses[d.getMonth()];
  let ano = d.getFullYear();

  return `${dia}, ${date} de ${mes} de ${ano}`;
};