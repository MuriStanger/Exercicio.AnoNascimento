var resultado = document.getElementById("resultado");
var botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.onclick = calcularIdade;
var botaoLimpar = document.getElementById("botaoLimpar");
botaoLimpar.addEventListener("click", limpar);

function calcularIdade() {
    console.log("entrou");
    var campoNascimento = document.getElementById('campoNascimento');
    var anoNascimento = parseInt(campoNascimento.value.trim());
    resultado.innerText = "Idade: " + (new Date().getFullYear() - anoNascimento + " anos");

}

function limpar() {
    console.log("entrou");
    campoNascimento.value = '';
    resultado.innerText = "";
};