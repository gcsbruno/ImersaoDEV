var primeiraCarta = {
  nome: "Anakin Skywalker",
   atributos: { 
    ataque: 90,
    defesa: 50,
    magia: 80,
 }}

var segundaCarta = {
  nome: "Obi-Wan Kenobi",
atributos: {
  ataque: 85,
  defesa: 70,
  magia: 85,
}}

var terceiraCarta = {
  nome: "Luke Skywalker",
 atributos: {
  ataque: 80,
  defesa: 75,
  magia: 88,
}}

var quartaCarta = {
    nome: "Mace Windu",
  atributos: {
    ataque: 88,
    defesa: 70,
    magia: 82,
  }}
  
  var quintaCarta = {
    nome: "Yoda",
    atributos: {
    ataque: 95,
    defesa: 45,
    magia: 90,
  }}
  
  var sextaCarta = {
    nome: "Qui-Gon Jinn",
    atributos: {
    ataque: 79,
    defesa: 89,
    magia: 83,
  }}
  
  var setimaCarta = {
    nome: "Rey Skywalker",
    atributos: {
    ataque: 75,
    defesa: 85,
    magia: 80,
  }}
  
  var oitavaCarta = {
    nome: "Ahsoka Tano",
    atributos: {
    ataque: 85,
    defesa: 80,
    magia: 75,
  }}


var cartas = [primeiraCarta, segundaCarta, terceiraCarta, quartaCarta, quintaCarta, sextaCarta, setimaCarta, oitavaCarta]



function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 8)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 8)
  while (numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 8)
  }
  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
  }


function obtemAtributoSeleciado() {
  var radioAtributo = document.getElementsByName('atributo')
  for (var i=0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado= obtemAtributoSeleciado()
  console.log(atributoSelecionado)
  
  if (cartaJogador. atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])
    alert('Venceu a carta da máquina')
 else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) 
  alert('Perdeu. Carta da máquina é maior')
 else {
  alert('Empatou!')
}
  console.log(cartaMaquina)
}
  