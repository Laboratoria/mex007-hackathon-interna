window.movies = {
    filterGenre: (data, buttonId) => {
        const filterMovieByGenere = data.filter(data => data.includes(buttonId))
        console.log(filterMovieByGenere)
    }
}