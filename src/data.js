window.data = {

filterByConside: (dataMovieList, letterValue) => {

    const searConside = dataMovieList.filter(dataMovieList => (dataMovieList.Title.toLowerCase().match(letterValue.toLowerCase()) ||
            dataMovieList.Director.toLowerCase().match(letterValue.toLowerCase()) ||
            dataMovieList.Year.match(letterValue)));
    return searConside;
},


orderData: (dataMovie) => {

    if (dataMovie.Year !== '2019' && dataMovie.imdbRating !== "N/A"){

    return dataMovie.sort((a, b) => (parseFloat(b.imdbRating) - parseFloat(a.imdbRating)));;
    }
},

filterbyYear: (dataMovie) => {
    const filterDataMovie = dataMovie.filter(data =>(data.Year.includes('2019')));
    return filterDataMovie;
} 
}
   
