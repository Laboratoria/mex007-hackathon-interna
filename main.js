const url = "http://www.omdbapi.com/?t="+encodeURI("Harry Potter")+"&apikey=3d0c4780"

fetch(url)

.then(response => response.json())
.then(json => console.log(json))