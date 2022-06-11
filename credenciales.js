// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-K3ihXHwz3gp2tygvP_4PF4VzllchntA",
  authDomain: "productivity-2f5fd.firebaseapp.com",
  projectId: "productivity-2f5fd",
  storageBucket: "productivity-2f5fd.appspot.com",
  messagingSenderId: "713263123689",
  appId: "1:713263123689:web:7f1aa000ddbf4d6e433478"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;