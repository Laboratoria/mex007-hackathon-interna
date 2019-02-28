const hola = document.getElementById('hola')

hola.addEventListener("click", () => {
  redireccionar();
})

const redireccionar = () => {
  setTimeout("location.href='./home.html'");
}