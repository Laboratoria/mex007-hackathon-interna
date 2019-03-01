const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));
let titles = ['robocop', 'mean-girls', 'fast-and-furious', '10-things-i-hate-about-you', 
'batman','kill-bill', 'it', 'beetlejuice', 'avatar'];
let allMovies = [];
let resultsMovies = document.getElementById('results');
const btn = document.getElementById('btn');
const searcher = document.getElementById('searcher');


 
btn.addEventListener ('click' , () => {
  let searcherValue = searcher.value;
  console.log(searcherValue);
  window.movies.searchByName(allMovies, searcherValue)
})




for(let i= 0; i< titles.length; i++) {
    fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+ titles[i])
    .then(res => res.json())
        .then (data => {
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
