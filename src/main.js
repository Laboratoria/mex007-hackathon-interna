const cardMovie = document.getElementById('card-movie');

//const newData = JSON.parse(localStorage.getItem('movies'))
let idArray = ['tt3896198', 'tt0076759', 'tt1371111'];
let allMovies = [];
let movieData =[];
let apiKey = '96fb7a85';
const moviesData = () => {
    for (let i = 0; i < idArray.length; i++) {
        //Fetch para traer la data del archivo lol.json
        fetch ('https://www.omdbapi.com/?i='+idArray[i]+'&apikey='+apiKey)
        .then (response => response.json())
        .then (data=>{
        movieData = data;
        allMovies.push(movieData);
        return allMovies
        })
        .then(result => printData(result))
        .catch(err => (err))
    }
};

// //Función para imprimir la data en el HTML
const printData = (allMovies) => {
    cardMovie.innerHTML = " ";
    allMovies.forEach(movies => {
      let result = `<div class="background-poster" style="background-image:url(${movies.Poster})"> </div>
      <p>${movies.Title}</p>`;
      cardMovie.insertAdjacentHTML("beforeend", result);
    });
}

moviesData(); 


