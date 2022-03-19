// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1O8QwKd-Zcss5gvCGSEWfILivhvF1cNI",
  authDomain: "course-line-web-app.firebaseapp.com",
  projectId: "course-line-web-app",
  storageBucket: "course-line-web-app.appspot.com",
  messagingSenderId: "60824848507",
  appId: "1:60824848507:web:c0cfa9412358618fd8fade"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
//const authentication
const auth = firebase.auth();

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location = 'https://soumwadeep.github.io/Course-Line/';
  }
});

//sign out function
  function signOut(){
    auth.signOut();
    window.location = 'https://soumwadeep.github.io/Course-Line/';
  }
