var primeiraCarta = {
    nome: "Anakin Skywalker",
    imagem: "https://static.wikia.nocookie.net/ptstarwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20151023200318",
     atributos: { 
      ataque: 90,
      defesa: 50,
      magia: 80,
   }}
  
  var segundaCarta = {
    nome: "Obi-Wan Kenobi",
    imagem: "https://img.ibxk.com.br//ms/images/highlights/000/054/335/51019.jpg?w=1200&h=675&mode=crop&scale=both",
  atributos: {
    ataque: 85,
    defesa: 70,
    magia: 85,
  }}
  
  var terceiraCarta = {
    nome: "Luke Skywalker",
    imagem: "https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg",
   atributos: {
    ataque: 80,
    defesa: 75,
    magia: 88,
  }}
  
  var quartaCarta = {
      nome: "Mace Windu",
    imagem: "https://static.wikia.nocookie.net/ptstarwars/images/f/fc/Mace_Windu.jpg/revision/latest?cb=20060621015058",
    atributos: {
      ataque: 88,
      defesa: 70,
      magia: 82,
    }}
    
    var quintaCarta = {
      nome: "Yoda",
      imagem: "https://hqrock.files.wordpress.com/2015/11/star-wars-attack-of-the-clones-yoda.jpg?w=400",
      atributos: {
      ataque: 95,
      defesa: 45,
      magia: 90,
    }}
    
    var sextaCarta = {
      nome: "Qui-Gon Jinn",
      imagem: "https://observatoriodeseries.uol.com.br/wp-content/uploads/2021/01/star-wars-2.jpg",
      atributos: {
      ataque: 79,
      defesa: 89,
      magia: 83,
    }}
    
    var setimaCarta = {
      nome: "Rey Skywalker",
      imagem: "https://i.pinimg.com/originals/ae/6b/bf/ae6bbf9eed813d6408e64c4ee4702caa.jpg",
      atributos: {
      ataque: 75,
      defesa: 85,
      magia: 80,
    }}
    
    var oitavaCarta = {
      nome: "Ahsoka Tano",
      imagem: "https://assets.b9.com.br/wp-content/uploads/2020/03/rosario-dawson-will-play-ahsoka-tano-in-the-mandalorin-seson-2-socil.jpg",
      atributos: {
      ataque: 85,
      defesa: 80,
      magia: 75,
    }}
  
  
  var cartas = [primeiraCarta, segundaCarta, terceiraCarta, quartaCarta, quintaCarta, sextaCarta, setimaCarta, oitavaCarta]
  
  var cartaMaquina
  var cartaJogador
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar ()
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de Cartas no Jogo: " + cartas.length
    
    divQuantidadeCartas.innerHTML = html
  }
  
  function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"
      
    divPlacar.innerHTML = html
  }
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
      cartaMaquina = cartas[numeroCartaMaquina]
      cartas.splice(numeroCartaMaquina, 1)
  
      var numeroCartaJogador = parseInt(Math.random() * cartas.length)
      cartaJogador = cartas[numeroCartaJogador]
      cartas.splice(numeroCartaJogador, 1)
  
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
  
      exibeCartaJogador()
  }
  
  function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    
     divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
  
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
      var atributoSelecionado = obtemAtributoSelecionado()
  
     if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Venceu a carta da máquina!</p>'
          pontosJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Perdeu, carta da máquina é mais poderosa</p>'
           pontosMaquina++
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
  
      if(cartas.length == 0){
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina){
          htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
          htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
          htmlResultado = '<p class="resultado-final"></p>'
        }
      } else {
          document.getElementById('btnProximaRodada').disabled = false
        }
      
      divResultado.innerHTML = htmlResultado
      document.getElementById('btnJogar').disabled = true
  
      atualizaPlacar()
      exibeCartaMaquina()
      atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaMaquina.atributos) {
          console.log(atributo)
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status --spacing'>"
  
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = '<div id="carta-jogador" class= "carta"></div> <div id="carta-maquina" class "carta"></div>'
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById('resultado')
    
    divResultado.innerHTML = " "
  }