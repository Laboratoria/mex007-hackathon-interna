window.data = {
filterInput: (baseDatos, letter) => {

    const search = baseDatos.filter(baseDatos => (baseDatos.Title.toLowerCase().match(letter.toLowerCase()) || baseDatos.Director.toLowerCase().match(letter.toLowerCase())));
    return search;
  },


filterByGenre: (genreId, baseDatos) => {
  const filterGenreInData = baseDatos.filter(baseDatos => baseDatos.Genre.includes(genreId));
   return filterGenreInData;

},
}