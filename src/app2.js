const r = JSON.parse(localStorage.getItem('r'))
const genre2 = localStorage.getItem('genre2')
const allMovies = JSON.parse(localStorage.getItem('allMovies'))
const getTitle = localStorage.getItem('getTitle')


let resultsMovies = document.getElementById('results');
const resultadoImg = () => {
    resultsMovies.innerHTML=''
    resultsMovies.innerHTML=`<header class="header">
    <nav class=${getTitle}> 
    <h1 class="${getTitle}">Movie ${getTitle} </h1>
    </nav>
 </header>`
    r.forEach(element => { 
      const arrayProperties= 
     `<main class="main"><div><img src="${element.Poster}"><br> <p> Titulo: ${element.Title}<br> Tiempo: ${element.Runtime}</p></div>`
      resultsMovies.insertAdjacentHTML('beforeend', arrayProperties); 
      console.log(resultsMovies) 
   });
   }

   resultadoImg()