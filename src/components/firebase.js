import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACsJKNLEJKPN-s0tQk5Jodj8ZHFjtwZTw",
    authDomain: "ecommerce-clone-fa954.firebaseapp.com",
    projectId: "ecommerce-clone-fa954",
    storageBucket: "ecommerce-clone-fa954.appspot.com",
    messagingSenderId: "967902165647",
    appId: "1:967902165647:web:add76ebf91fe8c50070efa",
    measurementId: "G-3E7V0ZBT7K"
  };

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // } else {
  //   firebase.app(); 
  // }

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};