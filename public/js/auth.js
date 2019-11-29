const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        updateUI("signedIn");
      // ...
    } else {
        updateUI("signedOut");
    }
  });

// login User
const loginForm = document.querySelector(".loginForm");
loginForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const email= loginForm.Email.value
    const password = loginForm.Password.value
    if( email !=='' && password !== ''){
        auth.signInWithEmailAndPassword(email,password);
        loginForm.reset();
    }
    else
        console.log('no data entered')
})

document.querySelector(".logout").addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut();
})