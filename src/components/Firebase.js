import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyBVlBspxcOtB2OeI4zC8nc6kg5T8zHliEc",
    authDomain: "blood-app-28395.firebaseapp.com",
    databaseURL: "https://blood-app-28395.firebaseio.com",
    projectId: "blood-app-28395",
    storageBucket: "blood-app-28395.appspot.com",
    messagingSenderId: "965873998842",
    appId: "1:965873998842:web:6fda9c1990f5459a4ce243",
    measurementId: "G-JP5GMP342H"
  });
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  export  {db,auth};