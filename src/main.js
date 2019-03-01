const cardMovie = document.getElementById('card-movie');
const search = document.getElementById('search');
const classButton = document.getElementsByClassName('buttons-menu');

let idArray = ["Harry Potter and the Sorcerer's Stone", 'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Deathly Hallows: Part 1',
    'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Half-Blood Prince', 'Guardians of the Galaxy Vol. 2',
    'Avatar', 'Back to the Future', 'Batman', 'Pacific Rim: Uprising',
    'Die Hard', 'Spider-Man: Homecoming', 'Spider-Man', 'Spider-Man 3', 'The Amazing Spider-Man 2',
    'The Amazing Spider-Man', 'Pacific Rim', 'Sucker Punch', 'Scott Pilgrim vs. the World',
    'The Avengers', 'Avengers: Age of Ultron', 'Captain America: Civil War', 'Avengers: Infinity War', 'Captain America: The First Avenger',
    'Captain America: The Winter Soldier', 'Doctor Strange', 'Black Panther', 'Ant-Man', 'Ant-Man and the Wasp',
    'Thor: Ragnarok', 'Thor: The Dark World', 'Thor', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'The Hunger Games', 'The Hunger Games: Catching Fire',
    'The Hunger Games: Mockingjay - Part 1', 'The Hunger Games: Mockingjay - Part 2',
    'Maze Runner: The Scorch Trials', 'Maze Runner: The Death Cure',
    'Titanic', 'The Conjuring', 'The Exorcist', '[Rec]', 'Skyfall', 'Spectre',
    'Guardians of the Galaxy Vol. 2', 'Me Before You',
    'Pride & Prejudice', "He's Just Not That Into You", "The Time Traveler's Wife", 'Forrest Gump', 'Just Go with It', "There's Something About Mary",
    'Midnight in Paris', 'The Shape of Water',
    'It', 'The Butterfly Effect', 'The Butterfly Effect 2', 'Wonder Woman', 'Suicide Squad', 'Just My Luck',
    'Begin Again', 'Ready Player One', 'Logan', 'Interstellar', 'Ghost in the Shell', 'The Perks of Being a Wallflower',
    'Star Wars: Episode I - The Phantom Menace', 'Star Wars', 'Rogue One', 'Star Wars: Episode VII', 'Star Wars: Episode VIII - The Last Jedi',
    'Solo: A Star Wars Story', 'Star Trek', 'Star Trek: Enterprise', 'Star Trek: Discovery'];
let sortArray = idArray.sort()
let allMovies = [];
let movieData = [];
let apiKey = '96fb7a85';
const moviesData = () => {
    for (let i = 0; i < sortArray.length; i++) {
        //Fetch para traer la data del archivo lol.json
        fetch('https://www.omdbapi.com/?t=' + sortArray[i] + '&apikey=' + apiKey)
            .then(response => response.json())
            .then(data => {
                movieData = data;
                // console.log(data)
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
        let result = `<div class="movie-container"> 
    <div class="background-poster" style="background-image:url(${movies.Poster})"> </div>
      <div id="title">        
      <p>${movies.Title}</p>
      <div class="espacio"></div>

      </div>`;
        cardMovie.insertAdjacentHTML("beforeend", result);
    });
}
moviesData();

search.addEventListener('keyup', () => {
    let name2 = search.value;
    let filtered = window.movie.filterByTitle(allMovies, name2);
    console.log(name2);
    if (name2 == "") {
        printData(allMovies);
    } else {
        printData(filtered);
    }
});

// //Esta función es para seleccionar el genero por el cual se va a filtrar
const selectGenre = () => {
    for (let i = 0; i < classButton.length; i++) {
        classButton[i].addEventListener("click", () => {
            let genreId = classButton[i].id;
            console.log(genreId);
            const arrayFiltered = window.movie.filterByGenre(allMovies, genreId);
            printData(arrayFiltered);
        })
    }
};

selectGenre(); 
