// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0dQmm3-Ku1vFgumA77S9abQ-WdZvP6C8",
  authDomain: "read-d6f2b.firebaseapp.com",
  databaseURL: "https://read-d6f2b-default-rtdb.firebaseio.com",
  projectId: "read-d6f2b",
  storageBucket: "read-d6f2b.appspot.com",
  messagingSenderId: "393601857791",
  appId: "1:393601857791:web:a29aa96421c98a596e34ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);