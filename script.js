const TMDB_ENDPOINT = 'https://api.themoviedb.org/3';
const APIKEY = '943b14825b1e71f3120e828f23abcb4a';
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function loadMovies() {
    xhr = new XMLHttpRequest ();
    xhr.open('GET', TMDB_ENDPOINT + '/movie/popular' + '?api_key=' + APIKEY, true);
    xhr.onload = showMovies;
    xhr.send();
}

function searchMovies() {
    xhr = new XMLHttpRequest ();
    query = document.getElementById('pesquisa').value;
    xhr.open ('GET', TMDB_ENDPOINT + '/search/movie' + '?api_key=' + APIKEY + '&query=' + query, true);
    xhr.onload = showMovies;
    xhr.send();
}


function showMovies() {
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="card col-md-4">
            <img src="${imagem}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${nomeFilme}</h5>
                <p class="card-text">${sinopse}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;
}