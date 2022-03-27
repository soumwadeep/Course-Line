// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
	import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
  
	// Your web app's Firebase configuration
	const firebaseConfig = {
	  apiKey: "AIzaSyDSL-XYudXQRKp_b7ukkPgUpI7JtTXLjao",
	  authDomain: "course-line-new.firebaseapp.com",
	  projectId: "course-line-new",
	  storageBucket: "course-line-new.appspot.com",
	  messagingSenderId: "389093002471",
	  appId: "1:389093002471:web:1f8b4333ef7a9037d36642"
	};
  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth();

	// Sign Up
	signUp.addEventListener('click', (e) => {

		//Add All The Input Field's ID
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		
		//Copy It From Docs
		createUserWithEmailAndPassword(auth, email, password)
  		.then((userCredential) => {
    	// Signed in 
    	const user = userCredential.user;
		alert("Welcome To Course Line! You Are Now Registered!");
		window.location.href = "home.html";
    	// ...
  		})
  		.catch((error) => {
    	const errorCode = error.code;
    	const errorMessage = error.message;

		//add an alert for errors
		alert(errorMessage);

    	// ..
  		});
	});
    // Sign In
	signIn.addEventListener('click', (e) => {

		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;

		signInWithEmailAndPassword(auth, email, password)
  		.then((userCredential) => {
    	// Signed in 
    	const user = userCredential.user;
		// alert("Welcome Back! You Are Now Logged In!");
		window.location.href = "home.html";
    	// ...
  		})
  		.catch((error) => {
    	const errorCode = error.code;
    	const errorMessage = error.message;

		//add an alert for errors
		alert(errorMessage);
  		});
	});