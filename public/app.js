function initialize(){
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCP3O-D0jhdFb5Fw_oH3q_TzNMHc-hr4T8",
    authDomain: "myproject-8d348.firebaseapp.com",
    databaseURL: "https://myproject-8d348-default-rtdb.firebaseio.com",
    projectId: "myproject-8d348",
    storageBucket: "myproject-8d348.appspot.com",
    messagingSenderId: "968511556636",
    appId: "1:968511556636:web:61e410049873c5d3db63d9",
    measurementId: "G-M78G669K5C"
  };
  firebase.initializeApp(firebaseConfig);
}
function register(){
    var userId = firebase.auth().currentUser.uid;
        const database=firebase.database();
        database.ref('users/'+userId).set({
            username:username,
            Date_of_Birth: dob,
            Place_of_Birth: pob
        })
}
function signup(){
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var pob=document.getElementById("place").value;
    var password=document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then((success) => {   
        register();
        window.location.replace("https://myproject-8d348.web.app/redirect.html");            
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;});
}
function signin(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((success) => {
                window.location.replace("https://myproject-8d348.web.app/profile.html");
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;});
}
function signOut(){
    firebase.auth().signOut().then((value) => {
                window.location.replace("https://myproject-8d348.web.app/index.html");
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}
function check_password() {
    if (document.getElementById('password').value ==
            document.getElementById('confirmpassword').value) {
        document.getElementById('button').disabled = false;
        alert.log("password don't match");
    } else {
        document.getElementById('button').disabled = true;
    }
}
