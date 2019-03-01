window.movie = {
  filterByTitle: (allMovies, name2) => {

    const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase())||(element.Year.toLowerCase().match(name2.toLowerCase()))||(element.Director.toLowerCase().match(name2.toLowerCase()))))
    return filteringTitle;
  },

  filterByGenre: (allMovies, genreId) => {
    const filtering = allMovies.filter(element => element.Genre.includes(genreId));
    return filtering;
  },

  

  toModal: (allMovies, movieSelect) => {
    let champ = {};
    for (const key in allMovies) {
      if (allMovies.hasOwnProperty(key)) {
        const element = allMovies[key];
        if (element.imdbID === movieSelect) {
          movie = element;
          return element;
        }
      }
    }
    return movie;
  },
  //Esta llave cierra window
}
