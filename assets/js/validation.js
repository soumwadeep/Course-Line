import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
	import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
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

    const user = auth.currentUser;
	onAuthStateChanged(auth, (user) => {
  		if (user) {
    	// User is signed in, see docs for a list of available properties
    	// https://firebase.google.com/docs/reference/js/firebase.User
    	const uid = user.uid;
        alert("Welcome: " + user.email + "! Please Read The Instructions Of Our Web App Before Using It!");
    	// ...
  		} else {
    	// User is signed out
            window.location.href = "index.html";
    	// ...
  		}
	});
    // Sign Out
    logOut.addEventListener('click', (e) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            alert("You Have Been Logged Out!");
            window.location.href = "index.html";
          }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
    	    const errorMessage = error.message;
            //add an alert for errors
		    alert(errorMessage);
        });
    });