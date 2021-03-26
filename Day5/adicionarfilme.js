function adicionarfilme() {
    var movieInput = document.querySelector('#movie');
    var movie = movieInput.value;

    if (movie.endsWith('.jpg' || ".png")) {
        showMovies(movie);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: 'Imagem Inválida!',
            footer: '<a href="https://olhardigital.com.br/2017/06/08/dicas-e-tutoriais/jpg-png-gif-e-bmp-quais-as-diferencas-entre-os-principais-formatos-de-imagens/">Como arrumar este problema?</a>'
        });
    }
    movieInput.value = "";
}
