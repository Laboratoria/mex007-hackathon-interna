const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));
let titles = ['robocop', 'mean-girls', '10-things-i-hate-about-you',
'batman','kill-bill', 'it', 'beetlejuice', 'avatar', 'mockingjay', 'the-notebook', 'amelie',
'blue-valentine', 'pride-and-prejudice', 'love-rosie', 'submarine', 'like-crazy', 'matrix', 'splice',
'alien', 'star-trek', 'interstellar', 'star-wars','donnie-darko','snowpiercer','the-man-who-fell-to-earth',
'the-nun', 'carol', 'annie-hall' , 'evil-dead', 'martyrs', 'halloween' , 'ravenous','the-exorcist'];

let allMovies = [];
let resultsMovies = document.getElementById('results');
const btn = document.getElementById('btn');
const searcher = document.getElementById('searcher');

btn.addEventListener ('click' , () => {
 let searcherValue = searcher.value;
 console.log(searcherValue);
 const consumingApi = fetchingApi(searcherValue);
})

let searchResult = [];
const fetchingApi = (searcherValue) => {
fetch('https://www.omdbapi.com/?apikey=68f0eccc&t='+searcherValue)
.then(res => res.json())
.then(data => {
 searchResult.push(data)
 printSearchResult(searchResult)
})
return searchResult;
};
//console.log(searchResult)
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
     let genre2 = event.target.dataset.color;
     let getTitle = event.target.dataset.mood;
     console.log(genre)
      let r = window.movies.filterGenre(allMovies , genre);
   localStorage.setItem('r', JSON.stringify(r))
   localStorage.setItem('genre2', JSON.stringify(genre2))
   localStorage.setItem('allMovies', JSON.stringify(allMovies))
   localStorage.setItem('getTitle', JSON.stringify(getTitle))
})};


const printSearchResult = (searchResult) => {
 searchResult.forEach(element => {
   resultsMovies.innerHTML="";
   const arrayProperties= `<img src="${element.Poster}"> <p> ${element.Title}${element.Runtime}</p>`
   resultsMovies.insertAdjacentHTML('beforeend', arrayProperties);
});
}