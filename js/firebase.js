// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmMTuqQjwPih6JLiMXEF-ISY25MGP-b1k",
  authDomain: "bridge-to-real-9c55a.firebaseapp.com",
  projectId: "bridge-to-real-9c55a",
  storageBucket: "bridge-to-real-9c55a.appspot.com",
  messagingSenderId: "60849820987",
  appId: "1:60849820987:web:6d5e90cab75a5f8fda931e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = firebase.firestore();
