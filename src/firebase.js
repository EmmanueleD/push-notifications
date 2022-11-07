// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

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

// Add the public key generated from the console here.

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      getToken(messaging, {
        vapidKey:
          "BLOjYR6_W7SCWT3iloqWTuZjHdesGtTTdr4zVWU0JjeyebtKGl1exIL7f3nIqy6pZDTLTD-o0bTEdAYYGA-Qm_0",
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log(
              "🚀 ~ file: firebase.js ~ line 37 ~ .then ~ currentToken",
              currentToken
            );
            // Send the token to your server and update the UI if necessary
            // ...
          } else {
            // Show permission request UI
            console.log(
              "No registration token available. Request permission to generate one."
            );
            // ...
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
          // ...
        });
    }
  });
}

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);
  // eslint-disable-next-line no-unused-vars
  const notification = new Notification(payload.notification.title, {
    body: payload.notification.body,
  });
});

requestPermission();

export default { app, messaging };
