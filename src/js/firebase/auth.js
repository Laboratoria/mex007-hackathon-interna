if (window.location.pathname === '/src/views/login' || window.location.pathname ==="/privado/src/views/login.html") {
console.log(location.pathname)
  const signIn = document.getElementById('sign-in')

  signIn.addEventListener('click', () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    console.log(email, password)
    if (password.length < 6) {
      email.value = ''
      password.value= ''
      M.toast({
        html: 'Por favor ingresa una contraseña de mas de 6 caracteres'
      })
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  })



  const googlebtn = document.getElementById('googleBtn')
  const googleAuth = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }


  googlebtn.addEventListener('click', googleAuth)
}

const logOutBtn = document.getElementById('log-out')
let provider = new firebase.auth.GoogleAuthProvider();




firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    console.log(user)
    if (location.pathname === '/src/views/login' || window.location.pathname ==="/privado/src/views/login.html") {
      location.href = './../views/muro.html'
    }
    printPerfil(user)

  } else {
    if (window.location.pathname !== '/src/views/login') {
    console.log(window.location.pathname !== '/src/views/login')
      location.href = './../views/login.html'
    }
  if (location.pathname === '/privado/src/views/login'){
    console.log('esta en repo');
     if (window.location.pathname !== '/privado/src/views/login') {
      console.log(window.location.pathname !== '/privado/src/views/login')
        location.href = './../views/login.html'
      }
  }
    console.log('no hay usuario logeado')
    // No user is signed in.
  }
});

// firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function (result) {
//   if (result.credential) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // ...
//   }
//     console.log('usuario logeado')

//   // The signed-in user info.
//   var user = result.user;
// }).catch(function (error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

const logOut = () => {
  firebase.auth().signOut().then(function () {
    console.log('Sign-out successful');

    // Sign-out successful.
  }).catch(function (error) {
    console.log('An error happened.');
    // An error happened.
  });
}
logOutBtn.addEventListener('click', logOut)


const printPerfil = (user) => {

  const printUser = document.getElementById('perfil')
  const name = document.getElementById('name')

  let perfil = ` 
<div class="background">
  <img src="${user.photoURL}">
</div >
  <a href="#user"><img class="circle" src="${user.photoURL}"></a>
  <a href="#name"><span class="white-text name">${user.displayName}</span></>
  <a href="#email"><span class="white-text email"></span>${user.email}</span></a>`
  printUser.innerHTML = perfil
  name.innerHTML = user.displayName
}