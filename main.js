 const artMovies = ["vertigo","Citizen Kane", "Tokyo Story","2001: A Space Odyssey", "Man With A Camera","In the Mood for Love","Rashomon"," Andrei Rublev","Mulholland Dr.","Stalker","Shoah","El Padrino II","Taxi Driver","El General","Metropolis","Psycho","Jeanne Dielman, 23 Commerce Quay, 1080 Brussels", "Satantango", "La Dolce Vita", " Pather Panchali" ]
const returnFilter = document.getElementById('return-filter');
const browser = document.getElementById("browser");
let baseDatos = []


 for (let i = 0; i < artMovies.length; i++) {
    const url = "http://www.omdbapi.com/?t="+ encodeURI(artMovies[i]) +"&apikey=3d0c4780"

    fetch(url)

   .then(response => response.json())
    

    .then(data => {

        baseDatos.push(data)

        drawMovies(baseDatos)

 })
}

const drawMovies = (arrayPokemons) => {
    const sectionRoot = returnFilter
    sectionRoot.innerHTML = "";
    arrayPokemons.map((baseDatos) => {
      let movieData = `
      <div>
        <p>${baseDatos.Title}</p>
        <p>°${baseDatos.Actors}</p>
        <img src="${baseDatos.Poster}"/>
        <p>${baseDatos.Director}</p>
      </div>`;
      sectionRoot.insertAdjacentHTML("beforeend", movieData)
    })

}

const filterLetter = () => {
    browser.addEventListener('keyup', () => {
      let searchValueInput = browser.value;
      drawMovies(window.data.filterInput(baseDatos, searchValueInput));
    });
  }
  filterLetter();


    
















