importScripts(
  "https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyAu8d1aof077dtxusuzpqe3HrPfAO1g3eI",
  authDomain: "testing-firebase-notifications.firebaseapp.com",
  projectId: "testing-firebase-notifications",
  storageBucket: "testing-firebase-notifications.appspot.com",
  messagingSenderId: "1054762658875",
  appId: "1:1054762658875:web:17dc4595c98ba937cac01e",
};

const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
// // Customize notification here
// const notificationTitle = "Background Message Title";
// const notificationOptions = {
//   body: "Background Message body.",
//   icon: "/firebase-logo.png",
// };

// self.registration.showNotification(notificationTitle, notificationOptions);
// });

// export default messaging;
