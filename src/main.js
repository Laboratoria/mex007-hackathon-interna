const cardMovie = document.getElementById('card-movie');
const search = document.getElementById('search');

let idArray = ["Harry Potter and the Sorcerer's Stone", 'Harry Potter and the Goblet of Fire',
    'Harry Potter and the Deathly Hallows: Part 2', 'Harry Potter and the Prisoner of Azkaban',
    'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Deathly Hallows: Part 1',
    'Harry Potter and the Order of the Phoenix', 'Harry Potter and the Half-Blood Prince', 'Guardians of the Galaxy Vol. 2',
    'Avatar', 'Mulan', 'WALL·E', 'Toy Story', 'Back to the Future', 'Batman', 'Pacific Rim: Uprising',
    'Die Hard', 'Frozen', 'Spider-Man: Homecoming', 'Spider-Man', 'Spider-Man 3', 'The Amazing Spider-Man 2',
    'The Amazing Spider-Man', 'Pacific Rim', 'Sucker Punch', 'Scott Pilgrim vs. the World',
    'The Avengers', 'Avengers: Age of Ultron', 'Captain America: Civil War', 'Avengers: Infinity War', 'Captain America: The First Avenger',
    'Captain America: The Winter Soldier', 'Doctor Strange', 'Black Panther', 'Ant-Man', 'Ant-Man and the Wasp',
    'Thor: Ragnarok', 'Thor: The Dark World', 'Thor', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'The Hunger Games', 'The Hunger Games: Catching Fire',
    'The Hunger Games: Mockingjay - Part 1', 'The Hunger Games: Mockingjay - Part 2', 'The Lion King', 'Rio', 'Wreck-It Ralph', 'Ralph Breaks the Internet',
    'Tangled', 'Kung Fu Panda', 'Kung Fu Panda 2', 'Kung Fu Panda 3', 'Maze Runner: The Scorch Trials', 'Maze Runner: The Death Cure',
    'Titanic', 'The Conjuring', 'The Exorcist', '[Rec]', 'Skyfall', 'Spectre', 'The Incredibles', 'Monsters, Inc.', 'Up', 'Monsters University',
    'Hotel Transylvania', 'Hotel Transylvania 2', 'Hotel Transylvania 3: Summer Vacation', 'Inside Out', 'Cars', 'Cars 2',
    'How to Train Your Dragon', 'How to Train Your Dragon 2', 'How to Train Your Dragon: The Hidden World', 'Ice Age', 'Ice Age: The Meltdown',
    'Ice Age: Dawn of the Dinosaurs', 'Ice Age: Continental Drift', 'Shrek', 'Shrek the Third', 'Shrek Forever After', 'Epic', 'Despicable Me',
    'Despicable Me 2', 'Despicable Me 3', 'ParaNorman', 'Corpse Bride', 'Big Hero 6', 'Toy Story 2', 'Toy Story 3', 'Toy Story 4', 'Megamind',
    'Madagascar', "Madagascar 3: Europe's Most Wanted", 'Spirit: Stallion of the Cimarron', 'Atlantis: The Lost Empire',
    'Beauty and the Beast', 'Cinderella', 'Maleficent', 'Mirror Mirror', 'Guardians of the Galaxy Vol. 2', 'Brave', 'Me Before You',
    'Pride & Prejudice', "He's Just Not That Into You", "The Time Traveler's Wife", 'Forrest Gump', 'Just Go with It', "There's Something About Mary",
    'Midnight in Paris', 'The Devil Wears Prada', 'Memoirs of a Geisha', "Pan's Labyrinth", 'The Shape of Water', 'White Chicks', 'Grown Ups', 'Grown Ups 2',
    'Finding Dory', 'Finding Nemo', 'Home Alone', 'It', 'The Butterfly Effect', 'The Butterfly Effect 2', 'Wonder Woman', 'Suicide Squad', 'Just My Luck',
    'Begin Again', 'Ready Player One', 'Logan', 'Interstellar', 'Ghost in the Shell', 'The Perks of Being a Wallflower',
    'Star Wars: Episode I - The Phantom Menace', 'Star Wars', 'Rogue One', 'Star Wars: Episode VII', 'Star Wars: Episode VIII - The Last Jedi', 
    'Solo: A Star Wars Story', 'Star Trek', 'Star Trek: Enterprise', 'Star Trek: Discovery '];
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
        let result = `<div class="movie-container"> <div class="background-poster"> <img src="${movies.Poster}"> </div>
      <div id="title">${movies.Title}</div></div>`;
        cardMovie.insertAdjacentHTML("beforeend", result);
    });
}
moviesData();

search.addEventListener('keyup', () => {
    let name2 = search.value;
    let filtered = window.movie.filterByTitle(allMovies, name2);
    if (name2 == "") {
        printData(allMovies);
    } else {
        printData(filtered);
    }
});


