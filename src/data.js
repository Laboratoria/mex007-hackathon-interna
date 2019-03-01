window.data = {
filterInput: (dataMovies, letter) => {

    const search = dataMovies.filter(dataMovies => (dataMovies.Title.toLowerCase().match(letter.toLowerCase()) || dataMovies.Director.toLowerCase().match(letter.toLowerCase())));
    return search;

  },

  filterData: (dataMovies, optionFilter) => {
    const arrayFilteredPokemons = dataMovies.filter(dataMovies => dataMovies.Genre.includes(optionFilter))
    return arrayFilteredPokemons
  },
}