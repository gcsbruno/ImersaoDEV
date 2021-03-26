function addMovie () {
    var movieInput = document.querySelector('#movie')
    var movie = movieInput.value
    
    if (movie.endsWith('.jpg' || ".png")){
      showMovies(movie)
    } else {
      Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: 'Imagem Inválida!',
    footer: '<a href="https://olhardigital.com.br/2017/06/08/dicas-e-tutoriais/jpg-png-gif-e-bmp-quais-as-diferencas-entre-os-principais-formatos-de-imagens/">Como arrumar este problema?</a>'
  })
    }
    movieInput.value = ""
  }
  
  function addTrailer () {
    var trailerInput = document.querySelector('#trailer')
    var trailer = trailerInput.value
    
    if (trailer.startsWith("<iframe") || trailer.endsWith("</iframe>")){
      document.querySelector('#lMovie').innerHTML = trailer
    } else {
      Swal.fire({
    icon: 'error',
    title: 'Erro!',
    text: 'Formato Inválido!',
    footer: '<a href="https://rockcontent.com/br/blog/embed-code-o-que-e/">Como arrumar este problema?</a>'
  })
    }
    trailerInput.value = ""
  }
    
  
  function showMovies(movie) {
    var movieList = document.querySelector('#listaFilmes')
    var movieElement = "<img src=" + movie + ">"
    movieList.innerHTML = movieList.innerHTML + movieElement
  }
  
  
  