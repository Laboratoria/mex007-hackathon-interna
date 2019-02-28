const printData = document.getElementById('prueba');
let kinema = [];


const movies = ["tt0892769","tt8155288","tt0437086","tt3513498","tt6513120","tt7634968","tt5715962","tt0487591","tt2043865","tt4112448","tt5259966","tt0071204","tt2676194","tt2059255","tt0412142","tt0108778","tt1183352","tt1454468","tt0473445","tt0039668","tt6794790","tt0245574","tt6155172","tt0185116","tt0245712"]
for(i=0;i<movies.length;i++){
    const url= "http://www.omdbapi.com/?i=" + movies[i] + "&apikey=91de21ce";
    fetch (url)
    .then (data => data.json())
    .then(data => {
        dataCinema = data;
        kinema.push(dataCinema)
        printFilms(dataCinema)
        
       

    
})
}


const printFilms = () => {
    kinema.forEach(element => {
      let genre = element.Genre;
      let infoCine = `<div class="casilla">
     <h6>${element.Title}</h6>
     <img src="${element.Poster}" class="img-Poster">
     <p>Genre: ${genre}</p>
     <p>Year: ${element.Year}</p>
     <p>Director: ${element.Director}</p>
     <p>Plot: ${element.Plot}</p>
     <p>Actors: ${element.Actors}</p>
     <p>Country: ${element.Country}</p></button>`;
    printData.insertAdjacentHTML("beforeend", infoCine);
      return printFilms;
    });
   };




alert("hola, no puedo hacer esto");
