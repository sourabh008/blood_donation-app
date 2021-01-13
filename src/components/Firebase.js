import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseapp=firebase.initializeApp({
    apiKey: "AIzaSyAR3NmJGeBfoU-_utQutCiVK3Y589qj24s",
    authDomain: "blood-ef878.firebaseapp.com",
    projectId: "blood-ef878",
    storageBucket: "blood-ef878.appspot.com",
    messagingSenderId: "202276802579",
    appId: "1:202276802579:web:cecfa17450a31a41a66fe6",
    measurementId: "G-SRCYMQB20H"
  });
  const db=firebaseapp.firestore();
  const auth=firebase.auth();
  const storage = firebase.storage()

  export  {db,auth,storage};
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAR3NmJGeBfoU-_utQutCiVK3Y589qj24s",
  //   authDomain: "blood-ef878.firebaseapp.com",
  //   projectId: "blood-ef878",
  //   storageBucket: "blood-ef878.appspot.com",
  //   messagingSenderId: "202276802579",
  //   appId: "1:202276802579:web:cecfa17450a31a41a66fe6",
  //   measurementId: "G-SRCYMQB20H"
  // };