window.movies = {
    filterGenre: (data, buttonId) => {
        const filterMovieByGenere = data.filter(data => data.Genre.includes(buttonId))
        console.log(filterMovieByGenere)
        return filterMovieByGenere
    },
 
    searchByName: (data, searchValue) => {
        let filterMovieByName = data.filter(data => data.Title.match(searchValue));
        console.log(filterMovieByName);
        return filterMovieByName;
        }
 
 };
