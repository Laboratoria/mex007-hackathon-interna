let dataCinema="";
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=91de21ce')
.then (data => data.json())
.then (data => {
    dataCinema = data;
    localStorage.setItem("data", JSON.stringify(dataCinema))
})

dataCinema = JSON.parse(localStorage.getItem("data"));
const prueba = (dataCinema) => {
    dataCinema.forEach(element => {
        let title = element.Title;
        let year = element.Year;
        return(title,year)
    });
}

prueba.innerHTML = `<p> Titulo: ${dataCinema.Title}</p>
<p> Año: ${dataCinema.Year}</p>`;

alert('Hola')