const artMovies = ["vertigo","Citizen Kane", "Tokyo Story","2001: A Space Odyssey", "Man With A Camera","In the Mood for Love","Rashomon"," Andrei Rublev","Mulholland Dr.","Stalker","Shoah","El Padrino II","Taxi Driver" ,"Metropolis","Psycho","Jeanne Dielman, 23 Commerce Quay, 1080 Brussels", "Satantango", "La Dolce Vita", " Pather Panchali" ]
const returnFilter = document.getElementById('return-filter');
const browser = document.getElementById("browser");
let dataMovies = []
const botonFilter = Array.from(document.getElementsByClassName("genre"));


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
        <p class="plot">°${dataMovies.Plot}</p>
        <img class="poster" src="${dataMovies.Poster}"/>
        <p>${dataMovies.Director}</p>
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


    
















