const buttonFilter = Array.from(document.getElementsByClassName("boton-type-chart"));
const radioType = Array.from(document.getElementsByClassName("radio-type"));
const typeData = Array.from(document.getElementsByClassName('type'));
const printData = document.getElementById('prueba');
const dataMovies = document.getElementById('data-movies');
const home = document.getElementById('home');
const search = document.getElementById('search');
const searchData = document.getElementById('search-data');
const inputSearch = document.getElementById('input-search');
const index = document.getElementById('index')
const director = document.getElementById('director-search');
const category = document.getElementById('category')
let kinema = [];


const movies = ["tt0892769","tt8155288","tt0437086","tt3513498","tt6513120","tt7634968","tt5715962","tt0487591","tt2043865","tt4112448","tt5259966","tt0071204","tt2676194","tt2059255","tt0412142","tt0108778","tt1183352","tt1454468","tt0473445","tt0039668","tt6794790","tt0245574","tt6155172","tt0185116","tt0245712", "tt1520211","tt0238784","tt0096697", "tt0460649", "tt8045690", "tt1608210", "tt0413573", "tt2707408", "tt2372162", "tt0229889", "tt2741602", "tt4158110", "tt0382271", "tt4154756","tt4633694", "tt6342284", "tt1727824", "tt2395427", "tt2250912", "tt0499549", "tt0910970", "tt1517451"] 
for (i = 0; i < movies.length; i++) {
  const url = "http://www.omdbapi.com/?i=" + movies[i] + "&apikey=91de21ce";
  fetch(url)
    .then(data => data.json())
    .then(data => {
      kinema.push(data);
      printFilms(kinema)
    })

}


const printFilms = (dataCinema) => {
  dataMovies.innerHTML = "";
  dataCinema.map(element => {
    let genre = element.Genre;
    let infoCine = `<div class="casilla">
     <h6>${element.Title}</h6>
     <img src="${element.Poster}" class="img-Poster">
     `;
   dataMovies.insertAdjacentHTML("beforeend", infoCine);
  });
};

for (let i = 0; i < buttonFilter.length; i++) {
  buttonFilter[i].addEventListener('click', () => {
    const typeGenre = buttonFilter[i].id;
    const movieFilter = window.data.dataFiltered(kinema, typeGenre)
    dataMovies.innerHTML= "";
    printFilms(movieFilter)
    dataMovies.classList.remove('hide');
    category.classList.add('hide');

  })
}
for (let i = 0; i < typeData.length; i++) {
  typeData[i].addEventListener('click', () => {
    const type = typeData[i].id;
    const movieFilter = window.data.dataType(kinema, type)
    printFilms(movieFilter)

  })
}

for( let i = 0; i < radioType.length; i++){
  radioType[i].addEventListener("click",()=>{
    if (radioType[i].checked === true){
      let radio = radioType[i].id;
      return radio;  
   }
  })

}

inputSearch.addEventListener('keyup', () => {
  const letterValue = inputSearch.value;
  const movieLetter = window.data.filterLetter(kinema, letterValue)
  printFilms(movieLetter);
})

director.addEventListener('keyup', () => {
  const dirValue = director.value;
  const dirLetter = window.data.filterDirector(kinema, dirValue)
  printFilms(dirLetter);
})
   const carousel = () => {
       printData.innerHTML = `<div id="carouselExampleIndicators" class="carousel slide caro" data-ride="carousel">
       <ol class="carousel-indicators">
         <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
         <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
       </ol>
       <div class="carousel-inner">
         <div class="carousel-item active">
           <img src="./images/alita.jpg" class="d-block w-100 poster" alt="#">
         </div>
         <div class="carousel-item">
           <img src="./images/httyd.jpg" class="d-block w-100 poster" alt="#">
         </div>
         <div class="carousel-item ">
           <img src="./images/lego.jpg" class="d-block w-100 poster" alt="#">
         </div>
         <div class="carousel-item ">
           <img src="./images/tir.jpg" class="d-block w-100 poster" alt="#">
         </div>
         <div class="carousel-item ">
           <img src="./images/wmw.jpg" class="d-block w-100 poster" alt="#">
         </div>
       </div>
       <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="sr-only">Next</span>
       </a>
     </div>` 
   }

   carousel()

   home.addEventListener('click', () => {
    index.classList.remove('hide');
    printData.classList.remove('hide');
    searchData.classList.add('hide');
   })

   search.addEventListener('click', () => {
    index.classList.add('hide');
    printData.classList.add('hide');
    searchData.classList.remove('hide');
    category.classList.remove('hide');
    
   })
