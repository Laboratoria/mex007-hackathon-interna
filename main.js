//Eventos del DOM
const genreClass = document.getElementsByClassName("genre");
const genreButton = document.getElementById("genreButton")



const artMovies = ["vertigo","Citizen Kane", "Tokyo Story","2001: A Space Odyssey", "Man With A Camera","In the Mood for Love","Rashomon"," Andrei Rublev","Mulholland Dr.","Stalker","Shoah","El Padrino II","Taxi Driver","Metropolis","Psycho","Jeanne Dielman, 23 Commerce Quay, 1080 Brussels", "Satantango", "La Dolce Vita", " Pather Panchali" ]
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
      usableGenreData
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


//filtros por género de película
const selectByGenre = () => {

  for(let i=0; i < genreClass.length; i++){
    genreClass[i].addEventListener('click',() =>{
    let genreId = genreClass[i].id;
    console.log(genreId)
     returnFilter.innerHTML = "";
     
    const arraySelectedGenre = window.data.filterByGenre(genreId,baseDatos);
    drawMovies(arraySelectedGenre);
      
  })}
}
selectByGenre();





/*const selectByRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener('click', () => {
      let rolId = rol[i].id;
      document.getElementById("mySidenav").style.width = "0%";
      printRolTitle.innerHTML = "";
      printRolTitle.insertAdjacentHTML("beforeend", rolId);

      const arrayRolesFiltered = window.lol.filtroDataRoles(rolId, dataLol);
      document.getElementById("welcomeMssg").style.display = 'none';
      printRolTitle.style.display = "block";
      print(arrayRolesFiltered);
    })
  }
}
selectByRol();*/












