let idia = document.getElementById("idia").value;
let imes = document.getElementById("imes").value;
let iano = document.getElementById("iano").value;
const requiredInput = document.querySelectorAll('.required')
const requiredSpan  = document.querySelectorAll('.span-required')




function setError(index) {
  requiredInput[index].style.border = 'solid 2px #e63636'
  requiredSpan[index].style.display = 'block'

}

function removeError(index) {
    requiredInput[index].style.border = ''
    requiredSpan[index].style.display = none
}

function dayValidate() {
  if (requiredInput[0].value.length > 31) {
    setError(0)
  } else {
    removeError(0)
  }
}

function calcularIdade() {
  
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let diaAtual = dataAtual.getDate();

  let idadeAno = anoAtual - Number(iano);
  let idadeMes = (idadeAno * 12) + (mesAtual - Number(imes));
  
  let dataNascimento = new Date(iano, imes - 1, idia);
  let idadeDias = Math.floor((dataAtual - dataNascimento) / (1000 * 60 * 60 * 24));
  
  let res = document.getElementById("res")
  res.innerHTML = `<span style= "color: hsl(259, 100%, 65%)">${idadeAno}</span>
  
  <span style= "color: black">Years<span/><br>

  <span style= "color: hsl(259, 100%, 65%)">${idadeMes}</span>

  <span style= "color: black">Months</span><br>

  <span style= "color: hsl(259, 100%, 65%)">${idadeDias}</span> days`;

}

  
