const buttonTypes = Array.from(document.getElementsByClassName('btn-mood'));//tomar botones 4  en una sola clase
/*console.log(buttonTypes);

fetch("./data/movies.json")
.then(response => response.json())
.then(data => data)*/





let genre; 

const gettingButtonId = () => {
  for (let boton in buttonTypes){
    buttonTypes[boton].addEventListener('click', (event) =>{
      genre = event.target.id;
    return genre
    })
  }};

gettingButtonId(buttonTypes);
console.log(genre);

