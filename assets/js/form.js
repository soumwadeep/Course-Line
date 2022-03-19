// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //Just copy the const firebaseconfig file materials in the latest versions of firebase and replace it with var!
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

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("You Are Registered!Welcome To Course Line!");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("Your Are Logged Out Successfully!");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Welcome: "+email);
      window.location.href = "home.html";
    }else{
      alert("You Are Not Logged In!Please Log In To Continue!");
    }
  })