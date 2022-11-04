import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAu8d1aof077dtxusuzpqe3HrPfAO1g3eI",
  authDomain: "testing-firebase-notifications.firebaseapp.com",
  projectId: "testing-firebase-notifications",
  storageBucket: "testing-firebase-notifications.appspot.com",
  messagingSenderId: "1054762658875",
  appId: "1:1054762658875:web:17dc4595c98ba937cac01e",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);

messaging.onBackgroundMessage((payload) => {
  var notification = new Notification("ciao mondo");
  console.log(
    "🚀 ~ file: firebase-messaging-sw.js ~ line 22 ~ messaging.onBackgroundMessage ~ notification",
    notification
  );
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  new Notification("ciao mamma");
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
