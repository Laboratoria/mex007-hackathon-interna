// const url = 'http://www.omdbapi.com/?t=creed&plot=full&apikey=1fb43c3b'
const url = 'http://www.omdbapi.com/?t=creed&plot=full&apikey=1fb43c3b'


fetch(url)
.then(resp => resp.json())
.then(api => console.log(api))