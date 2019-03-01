window.data = {

  dataFiltered: (data, genre) => {

    const arrayFilter = data.filter(data => data.Genre.includes(genre));
    return arrayFilter;

  },
  dataType: (data, type) => {

    const arrayFilter = data.filter(data => data.Type.includes(type));
    return arrayFilter;

  },


  filterLetter: (data, letter) => {
    const arrayLetter = data.filter(data => data.Title.toLowerCase().match(letter.toLowerCase()))
    return arrayLetter;
  },

  filterDirector: (data, director) => {
    const arrayLetter = data.filter(data => data.Director.toLowerCase().match(director.toLowerCase()))
    return arrayLetter;
  },
  
}