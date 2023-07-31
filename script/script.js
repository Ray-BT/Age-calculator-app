
const requiredInput = document.querySelectorAll('.required')
const requiredSpan  = document.querySelectorAll('.span-required')
const colorLabel    = document.querySelectorAll('.colorLabel')

function setError(index) {
  requiredInput[index].style.border = 'solid 2px #e63636'
  requiredSpan[index].style.display = 'block'
  colorLabel[index].style.color     = '#e63636'
}

function removeError(index) {
    requiredInput[index].style.border = ''
    requiredSpan[index].style.display = 'none'
    colorLabel[index].style.color     = 'rgb(117, 117, 117)'
}

function dayValidate() {
  if (requiredInput[0].value > 31 || '') {
    setError(0)
  } else {
    removeError(0)
  }
}

function monthValidate() {
  if (requiredInput[1].value > 12 || '') {
    setError(1)
  } else {
    removeError(1)
  }
}

function yearValidate() {
  let data = new Date()
  let anoatual = data.getFullYear() + 1

  if (requiredInput[2].value > 2023) {
    setError(2)
  } else {
    removeError(2)
  }
}

function calcularIdade() {
  let idia = parseInt(document.getElementById("idia").value);
  let imes = parseInt(document.getElementById("imes").value);
  let iano = parseInt(document.getElementById("iano").value);

  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let diaAtual = dataAtual.getDate();

  let idadeAno = anoAtual - iano;
  let idadeMes = mesAtual - imes;
  if (idadeMes < 0) {
    idadeAno--;
    idadeMes = 12 + idadeMes; // Adiciona 12 para considerar o mês anterior ao atual
  }

  let dataNascimento = new Date(iano, imes - 1, idia);

  // Calcula a diferença em milissegundos entre as datas
  let diferencaEmMilissegundos = dataAtual - dataNascimento;

  // Converte a diferença em milissegundos para dias
  let idadeDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));

  // Calcula a quantidade de dias no mês atual
  let diasNoMesAtual = new Date(anoAtual, mesAtual, 0).getDate();

  // Ajusta a contagem de dias para considerar apenas os dias após o último mês completo
  idadeDias = diaAtual - idia + 1;

  let res = document.getElementById("res");
  res.innerHTML = `<span style="color: hsl(259, 100%, 65%)">${idadeAno}</span>
  
  <span style="color: black">Years<span/><br>

  <span style="color: hsl(259, 100%, 65%)">${idadeMes}</span>

  <span style="color: black">Months</span><br>

  <span style="color: hsl(259, 100%, 65%)">${idadeDias}</span> days`;
}
  
