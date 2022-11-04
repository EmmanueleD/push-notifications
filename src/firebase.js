// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu8d1aof077dtxusuzpqe3HrPfAO1g3eI",
  authDomain: "testing-firebase-notifications.firebaseapp.com",
  projectId: "testing-firebase-notifications",
  storageBucket: "testing-firebase-notifications.appspot.com",
  messagingSenderId: "1054762658875",
  appId: "1:1054762658875:web:17dc4595c98ba937cac01e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);

export default messaging;
