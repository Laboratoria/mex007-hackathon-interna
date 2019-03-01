window.data = {
filterInput: (dataMovies, letter) => {

    const search = dataMovies.filter(dataMovies =>(dataMovies.Title.toLowerCase().match(letter.toLowerCase()) || dataMovies.Director.toLowerCase().match(letter.toLowerCase())));
    
    if(search == ""){
      alert("Sorry, unsuccessful search for the following reasons\n-It is not classified as Art Cinema\n -Not yet in our database, we will continue working.")
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