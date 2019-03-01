<<<<<<< HEAD
// let titles = [ 
//   { action : {title:'robocop', title:'mean-girls', title:'fast-and-furious' }},
//   { comedy : {title:'frozen', title:'mean-girls', title:'fast-and-furious' }}
// ];

=======
const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));
let titles = ['robocop', 'mean-girls', 'fast-and-furious', '10-things-i-hate-about-you', 
'batman','kill-bill', 'it', 'beetlejuice', 'avatar'];
let allMovies = [];
let resultsMovies = document.getElementById('results');
const btn = document.getElementById('btn');
const searcher = document.getElementById('searcher');
>>>>>>> da57d449a512b46b39f66693b7a215b7941a008d


<<<<<<< HEAD
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
=======
 
btn.addEventListener ('click' , () => {
  let searcherValue = searcher.value;
  console.log(searcherValue);
  window.movies.searchByName(allMovies, searcherValue)
})


>>>>>>> da57d449a512b46b39f66693b7a215b7941a008d


for(let i= 0; i< titles.length; i++) {
    fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+ titles[i])
    .then(res => res.json())
        .then (data => {
<<<<<<< HEAD
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
=======
          allMovies.push(data)
          return allMovies;
        })  
    } 
 
    for (let boton in buttonTypes){
      buttonTypes[boton].addEventListener('click', (event) =>{
      const genre = event.target.id
      console.log(genre)
       let r = window.movies.filterGenre(allMovies , genre);
       resultadoImg (r)
  
})};

const resultadoImg = (allMovies) => {
  resultsMovies.innerHTML="";
 allMovies.forEach(element => {
    const arrayProperties= `<img src="${element.Poster}"> <p> ${element.Title}${element.Runtime}</p>`
    resultsMovies.insertAdjacentHTML('beforeend', arrayProperties);
 });
 }
>>>>>>> da57d449a512b46b39f66693b7a215b7941a008d
