function calcularIdade() {
  let idia = document.getElementById("idia").value;
  let imes = document.getElementById("imes").value;
  let iano = document.getElementById("iano").value;
  
  let dataAtual = new Date();
  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let diaAtual = dataAtual.getDate();

  let idadeAno = anoAtual - Number(iano);
  let idadeMes = (idadeAno * 12) + (mesAtual - Number(imes));
  
  let dataNascimento = new Date(iano, imes - 1, idia);
  let idadeDias = Math.floor((dataAtual - dataNascimento) / (1000 * 60 * 60 * 24));

  let res = document.getElementById("res")
  res.innerHTML = `${idadeAno} years<br>${idadeDias} days<br>${idadeMes} months`;
}

  
