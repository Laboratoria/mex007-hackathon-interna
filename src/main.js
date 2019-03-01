// let titles = [ 
//   { action : {title:'robocop', title:'mean-girls', title:'fast-and-furious' }},
//   { comedy : {title:'frozen', title:'mean-girls', title:'fast-and-furious' }}
// ];


const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));//tomar botones 4  en una sola clase
//console.log(buttonTypes);

/*fetch("./data/movies.json")
.then(response => response.json())
.then(data => data)
.then(result =>{
    for (let boton in buttonTypes){
        buttonTypes[boton].addEventListener('click', (event) =>{
          genre = event.target.id;
          let buscar = result[genre]
          console.log(buscar)
          console.log(genre)
        // const filtered =  window.movies.filterGenre(result, genre)
        console.log(filtered)
        })
       }
});
*/
const resultsMovies = document.getElementById('results');
const boton = document.getElementById('action');

let titles = ['robocop', 'mean-girls', 'fast-and-furious'];
let allMovies = [];

//for (let boton in buttonTypes){
    
boton.addEventListener('click', (event) =>{
    event.preventDefault();
    for(let i= 0; i< titles.length; i++) {
    fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+ titles[i])
    .then(res => res.json())
        .then (data => {
          allMovies.push(data) 
          console.log(allMovies);
          resultadoImg (allMovies);   
        })
    } 
      
});
const resultadoImg = (allMovies) => {
  resultsMovies.innerHTML="";
allMovies.forEach(element => {
    const arrayProperties= `<img src="${element.Poster}"> <p> ${element.Title}${element.Runtime}</p>`
    resultsMovies.insertAdjacentHTML('beforeend', arrayProperties);
});
}