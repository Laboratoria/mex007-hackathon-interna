window.movie = {
    filterByTitle: (allMovies, name2) => {
        console.log(allMovies);
        const filteringTitle = allMovies.filter(element => (element.Title.toLowerCase().match(name2.toLowerCase())));
        return filteringTitle;
      },
//Esta llave cierra window
}
 