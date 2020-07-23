var urlBase = 'https://api.themoviedb.org/3/';
var key = '';
var pageNumber = 1;
var moviesDiv = document.getElementById('moviesContainer');

const fetchMovie = () =>  {
    var url = `${urlBase}discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`; 
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
      getMovies(data)
    })
}

fetchMovie();