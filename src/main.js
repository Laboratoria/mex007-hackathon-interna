
const artMovies = ["vertigo","Citizen Kane", "Tokyo Story","2001: A Space Odyssey", "Man With A Camera",
"In the Mood for Love","Rashomon"," Andrei Rublev","Mulholland Dr.","Stalker","Shoah","El Padrino II","Taxi Driver" 
,"Metropolis","Psycho","Jeanne Dielman, 23 Commerce Quay, 1080 Brussels", "Satantango", "La Dolce Vita", 
" Pather Panchali","The Wicker Man","UHF","Trainspotting","The Rocky Horror Picture Show","Pink Flamingos ",
"Mad Max","Pulp Fiction","The Shining","Brazil","Reservoir Dogs","Blue Velvet","Fight Club","Mystery Train",
"The Nightmare Before Christmas","The Elephant Man","The Lobster", "Moonrise Kingdom" ]

const returnFilter = document.getElementById('return-filter');
const browser = document.getElementById("browser");
let dataMovies = []
const botonFilter = Array.from(document.getElementsByClassName("genre"));
const botonFilterAwards = document.getElementById("Awards");
const botonFilterRating = document.getElementById("Rating");



 for (let i = 0; i < artMovies.length; i++) {
    const url = "https://www.omdbapi.com/?t="+ encodeURI(artMovies[i]) +"&apikey=3d0c4780"

    fetch(url)

   .then(response => response.json())
    .then(data => {

        dataMovies.push(data)

        drawMovies(dataMovies)
        

 })
}


const drawMovies = (arrayMovies) => {
    const sectionRoot = returnFilter
    sectionRoot.innerHTML = "";
    arrayMovies.forEach((dataMovies) => {
      let movieData = `
      <div class="movie-card">
        <p class="title">${dataMovies.Title}</p>

        <p class="genremov">${dataMovies.Genre}</p>
        <p class="dir">Director: ${dataMovies.Director}</p>
        <p class="dir"> ${dataMovies.imdbRating}</p></br>
        <p class="dir"> ${dataMovies.Awards}</p></br>
        <p class="plot">°${dataMovies.Plot}</p>
        <img class="poster" src="${dataMovies.Poster}"/>
        
      </div>`;
      sectionRoot.insertAdjacentHTML("beforeend", movieData)
    })

}
const drawTop = (arrayMovies) => {
  const sectionRoot = returnFilter
  sectionRoot.innerHTML = "";
  arrayMovies.forEach((dataMovies) => {
    let movieData = `
    <div class="movie-card">
      <p class="title">${dataMovies.Title}</p>
      <p class="plot">°${dataMovies.Plot}</p>
      <p class="dir">Director: ${dataMovies.Director}</p></br>
      <p class="dir"> ${dataMovies.imdbRating}</p></br>
      <p class="dir">Director: ${dataMovies.Awards}</p></br>
      <img class="poster" src="${dataMovies.Poster}"/>
      
    </div>`;
    sectionRoot.insertAdjacentHTML("beforeend", movieData)
  })

}

const filterLetter = () => {
    browser.addEventListener('keyup', () => {
      let searchValueInput = browser.value;
      drawMovies(window.data.filterInput(dataMovies, searchValueInput));
    });
  }
  
  filterLetter();

  const getGenreMovies = (arrayButtons) => {
    arrayButtons.map((buttonType) => {
      buttonType.addEventListener("click", (event) => {
        const buttonType = event.target.id;
        const finalArrayMovies = window.data.filterData(dataMovies, buttonType)
        drawMovies(finalArrayMovies)
      })
    })
  }
  getGenreMovies(botonFilter);

 
      botonFilterAwards.addEventListener("click", () => {
        const finalMovies = window.data.filterByAwards(dataMovies)
        drawMovies(finalMovies)
      })

     botonFilterRating.addEventListener("click", () => {
        const finalArray = window.data.sortData(dataMovies)
        drawTop(finalArray)
      })




    













