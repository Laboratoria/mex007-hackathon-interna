let idArray = ['tt3896198', 'tt0076759', 'tt1371111'];

let apiKey = '96fb7a85';
const moviesData = () => {
    for (let i = 0; i < idArray.length; i++) {
        //Fetch para traer la data del archivo lol.json
        fetch ('http://www.omdbapi.com/?i='+idArray[i]+'&apikey='+apiKey)
        .then (response => response.json())
        .then (data=>{
        movieData = data;
        console.log(movieData)
        })
    }
};

moviesData(); 
