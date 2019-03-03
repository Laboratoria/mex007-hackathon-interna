const carrusel = document.getElementById('carrusel')
const arrstart = ['rocky', 'avengers', 'aironman', 'rambo', 'family', 'deadpool', 'amor', 'horror', 'grito', 'dragon']



const printCarr = (arrMovies) => {
  for(let i = 0; i< 9; i++){
// console.log(arrMovies[i])

    let template = `
    <a class="carousel-item" href="#one!"><img src="${arrMovies[i].Poster}"></a>

    `
    carrusel.insertAdjacentHTML('beforeend', template)
  }
}


const fetchData = () => {
  const arrMovies = []
  arrstart.forEach(movie => {
    const url = `https://www.omdbapi.com/?apikey=1fb43c3b&s=${movie}&plot=full`
    fetch(url)
      .then(resp => resp.json())
      .then(movies => {
        if (movies.Search !== undefined) {
          movies.Search.forEach(una => {
            arrMovies.push(una)
          })
          if (arrMovies.length === 90) {
            shuffle(arrMovies)
            return arrMovies
          }
        }
      })
  })
  return arrMovies
}
fetchData()



var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
console.log(array)
printCarr(array)

	return array;

};
