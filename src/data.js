window.allKinema = {

    dataFiltered: (data, types) => {
  
      const arrayFilter = data.filter(data => data.type.includes(types));
      return arrayFilter;
  
    }
}
  