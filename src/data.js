window.movie = {
  filterByTitle: (allMovies, name2) => {

    const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase())||(element.Year.toLowerCase().match(name2.toLowerCase()))||(element.Director.toLowerCase().match(name2.toLowerCase()))))
    return filteringTitle;
  },

  filterByGenre: (allMovies, genreId) => {
    const filtering = allMovies.filter(element => element.Genre.includes(genreId));
    return filtering;
  },

  //Esta llave cierra window
}
