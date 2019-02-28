const cardMovie = document.getElementById('card-movie');

//Star Wars: Episode IV, Cloud Atlas, Guardians of the Galaxy Vol. 2/ Avatar



let idArray = ['Harry Potter and the Deathly Hallows: Part 2', 'Guardians of the Galaxy Vol. 2', 'Back to the Future', 'Avatar', 'Mulan', 'WALL·E', 'Toy Story', 'Back to the Future', 'Batman', 'Pacific Rim: Uprising', 'Die Hard', 'Frozen'];
let allMovies = [];
let movieData =[];
let apiKey = '96fb7a85';
const moviesData = () => {
    for (let i = 0; i < idArray.length; i++) {
        //Fetch para traer la data del archivo lol.json
        fetch ('https://www.omdbapi.com/?t='+idArray[i]+'&apikey='+apiKey)
        .then (response => response.json())
        .then (data=>{
        movieData = data;
        console.log(data)
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


