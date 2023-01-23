import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQ5oxT0hJ91G6qqfUgEFADwYgyBUCz7w4",
  authDomain: "solver-36c28.firebaseapp.com",
  projectId: "solver-36c28",
  storageBucket: "solver-36c28.appspot.com",
  messagingSenderId: "665712851826",
  appId: "1:665712851826:web:1b2fd2fad3c8bf12be3beb",
  measurementId: "G-MLRNPBJQ8Z"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;