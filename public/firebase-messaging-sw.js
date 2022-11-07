importScripts("https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging.js"
);

import { onBackgroundMessage } from "firebase/messaging/sw";

var firebaseConfig = {
  apiKey: "AIzaSyAu8d1aof077dtxusuzpqe3HrPfAO1g3eI",
  authDomain: "testing-firebase-notifications.firebaseapp.com",
  projectId: "testing-firebase-notifications",
  storageBucket: "testing-firebase-notifications.appspot.com",
  messagingSenderId: "1054762658875",
  appId: "1:1054762658875:web:17dc4595c98ba937cac01e",
};

const app = firebase.initializeApp(firebaseConfig);
app.messaging().getToken({
  vapidKey:
    "BLOjYR6_W7SCWT3iloqWTuZjHdesGtTTdr4zVWU0JjeyebtKGl1exIL7f3nIqy6pZDTLTD-o0bTEdAYYGA-Qm_0",
});

onBackgroundMessage(this.$messaging, (payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // eslint-disable-next-line no-unused-vars
  const notification = new Notification(payload.notification.title, {
    body: payload.notification.body,
  });
  // // Customize notification here
  // const notificationTitle = "Background Message Title";
  // const notificationOptions = {
  //   body: "Background Message body.",
  //   icon: "/firebase-logo.png",
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions);
});
