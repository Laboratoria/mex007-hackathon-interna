window.movies = {
    filterGenre: (data, buttonId) => {
<<<<<<< HEAD
        const filterMovieByGenere = data.filter(data => data.Genre.includes(buttonId));
        return filterMovieByGenere;
    }
}
=======
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
>>>>>>> da57d449a512b46b39f66693b7a215b7941a008d
