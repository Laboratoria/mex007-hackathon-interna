window.data = {
filterInput: (dataMovies, letter) => {

    const search = dataMovies.filter(dataMovies =>(dataMovies.Title.toLowerCase().match(letter.toLowerCase()) || dataMovies.Director.toLowerCase().match(letter.toLowerCase())));
    
    if(search == ""){
    alert("Sorry, busqueda sin éxtio por las siguientes razones: \n -No se clasifica como cine de culto \n -No se encuentra aun con nuestra base de datos. Seguiremos trabajando")
    }
    else{
    return search;
    }
  },

  filterData: (dataMovies, optionFilter) => {
    const arrayFilteredPokemons = dataMovies.filter(dataMovies => dataMovies.Genre.includes(optionFilter))
    return arrayFilteredPokemons
  },
  
  filterByAwards: (dataMovies) => {
    const arrayFilteredPokemons = dataMovies.filter(dataMovies => dataMovies.Awards.includes("wins"))
      return arrayFilteredPokemons
    },

    sortData: (dataMovies) => {
      const sortByName = dataMovies.sort((sortOrderA, sortOrderZ) => parseFloat(sortOrderA.imdbRating - sortOrderZ.imdbRating) ? -1 : 1);
      return sortByName;
    },
    
}