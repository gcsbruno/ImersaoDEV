const pokemons = [
    { nome: "Bulbasaur",
     img: "https://i.imgur.com/i8XNPzH.png"},
    { nome: "Charmander",
     img: "https://i.imgur.com/hw6r9jp.png"},
    { nome: "Squirtle",
     img: "https://i.imgur.com/luFwOtt.png"}]

     const enviar = document.getElementById('enviar')
     const refaz = document.getElementById('reload')
     const img = document.querySelector('img')
     
     var numero = 0;
     
     function aleatorio(){
       numero = Math.floor(Math.random() * pokemons.length)
     
       img.setAttribute('src', pokemons[numero].img)
     }
     
     resetar()
     
     function resetar(){
       document.querySelector('span').innerHTML = " ";
       document.querySelector('input').value = ""
       document.getElementById('imgpokemon').className = null
       aleatorio()
     }
     
     enviar.onclick = () => {
       let resposta = document.querySelector('input').value
     
       if(resposta.length){
         if(resposta.toLowerCase() == pokemons[numero].nome.toLowerCase()){
           document.querySelector('span').innerHTML = "Parabéns! É o" + pokemons[numero].nome
           document.getElementById('imgpokemon').className = "acertou"
           setTimeout(() => { resetar(); }, 3000)
         }else{
           document.querySelector('span').innerHTML = "Você errou! É o " + pokemons[numero].nome
           document.getElementById('imgpokemon').className = "acertou"
           setTimeout(() => { resetar(); }, 3000)
         }
       }else{
         document.querySelector('span').innerHTML = "Coloque o nome"
       }
     }
     
     refaz.onclick = resetar