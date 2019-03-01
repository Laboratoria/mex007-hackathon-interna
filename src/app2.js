const r = JSON.parse(localStorage.getItem('r'))
const genre = localStorage.getItem('genre')
const allMovies = JSON.parse(localStorage.getItem('allMovies'))
const getTitle = localStorage.getItem('getTitle')

let resultsMovies = document.getElementById('results');
const resultadoImg = () => {
    resultsMovies.innerHTML="";
    r.forEach(element => { 
      const arrayProperties= `<header class="header">
      <h1 class="title">Movie ${getTitle}</h1>
      <nav> 
      </nav>
   </header>
   <main class="main"><div><img src="${element.Poster}"><br> <p> Titulo: ${element.Title}<br> Tiempo: ${element.Runtime}</p></div>`
      resultsMovies.insertAdjacentHTML('beforeend', arrayProperties); 
      console.log(resultsMovies) 
   });
   }

   resultadoImg()