const movieSciFi = document.getElementById('movies-sci-fi');
let movieFilterByLetter  = document.getElementById('movies-sci-fi-filter');
const searchLett = document.getElementById("search");

const imbId = ['tt0816692', 'tt0083658', 'tt1454468', 'tt0499549',
                'tt0106062', 'tt0079501', 'tt0796366', 'tt0888496',
                'tt0084827', 'tt0088763', 'tt0078748', 'tt3188542', 'tt2087752',
              ];


const dataMovieList = [];

const dataMovie = () => {
 for (let i=0; i<imbId.length; i++) {
    fetch ('https://www.omdbapi.com/?i=' + imbId[i] +'&apikey=333f998f' )
    .then (response => response.json())
    .then (data => {
    dataMovieList.push(data);
    // printMovies(dataMovieList);
    })
  } 
};
 
dataMovie();

const printMovies = (dataMovieList) => {
  // const movieFilterByLetter = movieSciFi;
  movieSciFi.innerHTML= " ";
  
  dataMovieList.map((dataMovieList) => {
    let nameMovies =
    `<div class="data"><h5>${dataMovieList.Title}</h5><p>${dataMovieList.Year}</p><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}">
    </div>`;
    movieSciFi.insertAdjacentHTML("beforeend", nameMovies);
    // movieSciFi.innerHTML+=nameMovies;
  })
  };
   
  const filterCoincidence = () => {
    searchLett.addEventListener("keyup", () => {
     
      let searchValue = document.getElementById("search").value;
      printMovies( window.data.filterByConside(dataMovieList, searchValue));

       
      
    });
  }

  filterCoincidence();