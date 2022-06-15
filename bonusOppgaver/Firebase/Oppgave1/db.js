import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhN7T7kuS5YYyL0pti_mqysIy_pz21O_8",
    authDomain: "tictactoe-977c9.firebaseapp.com",
    databaseURL: "https://tictactoe-977c9.firebaseio.com",
    projectId: "tictactoe-977c9",
    storageBucket: "tictactoe-977c9.appspot.com",
    messagingSenderId: "401201228973",
    appId: "1:401201228973:web:1287063c33dc5ff4892a24"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function signUp(email, password) {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");
}



function signIn(email, password) {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}


function signOut() {

    auth.signOut();
    alert("Signed Out");

}



auth.onAuthStateChanged(function (user) {

    if (user) {

        var email = user.email;
        //alert("Active User " + email);

        //Take user to a different or home page

        //is signed in

    } else {

        //alert("No Active User");
        //no user is signed in
    }



});

export { auth, signUp, signIn, signOut };