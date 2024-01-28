// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axiosInstance from "./axios";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5MlyCKSCsRmZF2prZvyq5qLP8b8g1Ck0",
  authDomain: "navi-go-pragyan.firebaseapp.com",
  projectId: "navi-go-pragyan",
  storageBucket: "navi-go-pragyan.appspot.com",
  messagingSenderId: "1033880752986",
  appId: "1:1033880752986:web:77e36af0106a9a52ebd963",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up for FCM
const messaging = getMessaging(app);

const VAPID_KEY =
  "BAg1460ehZKKOqDnqWTVRo2yOM0_MZ6wE4sncUb5mUWkxf6Q4TH8fVUKGR0b5GbHiiqwMaEDt00_1waiq4tczvE";

// Add the public key generated from the console here.

const getFCMToken = () => {
  getToken(messaging, { vapidKey: VAPID_KEY })
    .then((currentToken) => {
      if (currentToken) {
        axiosInstance
          .post("subscribe-to-topic/RapidFire", { token: currentToken })
          .then((res) => {
            console.log("Successfully subscribed to topic", res);
          })
          .catch((err) => {
            console.log("Subscription to topic failed successfully", err);
          });
      } else {
        // Show permission request UI
        requestPermission();
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
};

getFCMToken();

// Handling messages when app is in foreground

onMessage(messaging, function (payload) {
  console.log("[firebase.js] Received foreground message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification?.title;
  const notificationOptions = {
    body: payload.notification?.body,
    icon: "/favicon.png",
  };

  //   self.registration.showNotification(notificationTitle, notificationOptions);

  var notification = new Notification(notificationTitle, notificationOptions);
  notification.onclick = function (event) {
    event.preventDefault();
    window.open(payload.notification.click_action || "/", "_blank");
    notification.close();
  };
});

//   routine to request permission
export const requestPermission = () => {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      getFCMToken();
    }
  });
};
