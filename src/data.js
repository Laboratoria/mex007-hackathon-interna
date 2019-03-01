window.movie = {
  filterByTitle: (allMovies, name2) => {
    console.log(allMovies);
    const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase())));
    return filteringTitle;
  },

  filterByGenre: (allMovies, genreId) => {
    const filtering = allMovies.filter(element => element.Genre.includes(genreId));
    return filtering;
  },
  //Esta llave cierra window
}
