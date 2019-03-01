const topDisplay = document.getElementById("top");
const RecomDisplay = document.getElementById("recommendation");
const PremiDisplay = document.getElementById("new");
const sectionPremier = document.getElementById('section-premier');
const sectionTop = document.getElementById('section-top');
const movieFilterByLetter = document.getElementById('movies-sci-fi-filter');
const searchLett = document.getElementById("search");
const topTenOrder = document.getElementById("imdbRating");
const dataFilter = document.getElementById("data-filter");
const movieRelease = document.getElementById("Year");
const homeDisplay = document.getElementById("home");
const dataMovieList = [];
const imbId = ['tt4154664','tt2527338','tt0076759',
  'tt3659388','tt0118884','tt0756683','tt0816692','tt0079945',
  'tt2649554','tt0379786','tt0087004','tt3967856',
  'tt0087182','tt0387808','tt0123755','tt0119654',
  'tt2075340','tt4680182','tt2798920','tt2543164',
  'tt0119177','tt0089114','tt0118929','tt0365808',
  'tt0084827','tt0083658', 'tt1454468', 'tt0499549',
  'tt0106062', 'tt0079501', 'tt0796366', 'tt0888496',
  'tt0084827', 'tt0088763', 'tt0078748', 'tt3188542', 
  'tt2087752','tt0096251','tt2076822',
  'tt5968394','tt0448115','tt2274648','tt2935510','tt3741700','tt2283336'
];

//Función para crear arrego de la Data con Fetch
const dataMovie = () => {
  for (let i = 0; i < imbId.length; i++) {
    fetch('https://www.omdbapi.com/?i=' + imbId[i] + '&apikey=333f998f')
      .then(response => response.json())
      .then(data => {
        dataMovieList.push(data);
        filterCoincidence(dataMovieList);
      })
  }
};


//Función que sirve para imprimir data
const printMoviesTop = (dataMovieList) => {
  sectionTop.innerHTML = " ";

  dataMovieList.map((dataMovieList) => {
    let nameMovies =
      `<div class="data"><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}"><h5>Title: ${dataMovieList.Title}</h5><p>Year: ${dataMovieList.Year}</p>
    <p>Rating: ${dataMovieList.imdbRating}</p>
    </div>`;
    sectionTop.insertAdjacentHTML("beforeend", nameMovies);

  })
};

const printMoviesPrem = (dataMovieList) => {
  sectionPremier.innerHTML = " ";

  dataMovieList.map((dataMovieList) => {
    let nameMovies =
      `<div class="data"><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}">
      <h5>Title: ${dataMovieList.Title}</h5><p>Year: ${dataMovieList.Year}</p>
    
    </div>`;
    sectionPremier.insertAdjacentHTML("beforeend", nameMovies);
    
  })
};

const printMoviesFilter = (dataMovieList) => {
  dataFilter.innerHTML = " ";

  dataMovieList.map((dataMovieList) => {
    let nameMovies =
      `<div class="data"><img id="${dataMovieList.Title}" src="${dataMovieList.Poster}">
      <h5>Title: ${dataMovieList.Title}</h5><p>Year: ${dataMovieList.Year}<br>Sinopsis: ${dataMovieList.Plot}
      </p>
    
    </div>`;
    dataFilter.insertAdjacentHTML("beforeend", nameMovies);

  })
};

//Funciín que filtra por conincidencia en Titulo, Director o año
const filterCoincidence = () => {
  searchLett.addEventListener("keyup", () => {
    dataFilter.style.display="block";
    RecomDisplay.style.display = "none";
    let searchValue = document.getElementById("search").value;
    printMoviesFilter(window.data.filterByConside(dataMovieList, searchValue));
  });
}

//Función para ordenar por calificacion de Ranking
topTenOrder.addEventListener("click", () => {
  dataFilter.style.display="none";
  topDisplay.style.display = "block";
  PremiDisplay.style.display = "none";
  RecomDisplay.style.display = "none";
  arrayNewOrder = window.data.orderData(dataMovieList);
  arrayTenMovies = arrayNewOrder.slice(0, 10);
  printMoviesTop(arrayTenMovies);

})

//Funcion para filtrar por año
movieRelease.addEventListener("click", () => {
  dataFilter.style.display="none";
  topDisplay.style.display = "none";
  PremiDisplay.style.display = "block";
  RecomDisplay.style.display = "none";
  arrayMovie = window.data.filterbyYear(dataMovieList);
  printMoviesPrem(arrayMovie);
})

homeDisplay.addEventListener("click", () => {
  topDisplay.style.display = "none";
  PremiDisplay.style.display = "none";
  RecomDisplay.style.display = "block";
  
})

//Invocando funciónes
dataMovie();
filterCoincidence();