const artMovies = ["vertigo","Citizen Kane", "Tokyo Story","2001: A Space Odyssey", "Man With A Camera","In the Mood for Love","Rashomon"," Andrei Rublev","Mulholland Dr.","Stalker","Shoah","El Padrino II","Taxi Driver","El General","Metropolis","Psycho","Jeanne Dielman, 23 Commerce Quay, 1080 Brussels", "Satantango", "La Dolce Vita", " Pather Panchali" ]
let baseDatos = {}
const returnFilter = document.getElementById('return-filter');


 for (let i = 0; i < artMovies.length; i++) {
    const url = "http://www.omdbapi.com/?t="+ encodeURI(artMovies[i]) +"&apikey=3d0c4780"

    fetch(url)

   .then(response => response.json())
    

    .then(data => {

        baseDatos = data
        drawMovies(baseDatos)
 })
}

const drawMovies = () =>{
  let sectionRoot = `
  <div>
    <p>N°${baseDatos.Title}</p>
    <img src="${baseDatos.Poster}"/>
    <p>${baseDatos.Director}</p>
    <p class="${baseDatos.Plot} tipoP">${baseDatos.Genre}</p>
  </div>`
  returnFilter.insertAdjacentHTML("beforeend", sectionRoot)
}


        // {
        //     title= data.Title
        //     poster =data.Poster
        //     director = data.director
        //     genre = data.Genre
        //     plot= data.Plot
        //     actors = data.Actors
        // console.log(title)
           
            
            
        // })



    
















