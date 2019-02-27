fetch('http://www.omdbapi.com/?t=titanic')
.then ((data) => data.json())
.then((Title) => {return console.log(Title)})   