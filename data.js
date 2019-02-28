window.data = {
filterInput: (baseDatos, letter) => {

    const search = baseDatos.filter(baseDatos => (baseDatos.Title.toLowerCase().match(letter.toLowerCase())));
    return search;

  },
}