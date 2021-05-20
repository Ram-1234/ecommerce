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

   if (!firebase.apps.length) {
     firebase.initializeApp(firebaseConfig);
   } else {
     firebase.app(); 
   }

  //const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();
  const auth=firebase.auth();

  export {db,auth};






// import firebase from "firebase/app"
// import "firebase/firestore" // for database
// import "firebase/auth" // for authentication

// const config = {
//   apiKey: "AIzaSyACsJKNLEJKPN-s0tQk5Jodj8ZHFjtwZTw",
//   authDomain: "ecommerce-clone-fa954.firebaseapp.com",
//   projectId: "ecommerce-clone-fa954",
//   storageBucket: "ecommerce-clone-fa954.appspot.com",
//   messagingSenderId: "967902165647",
//   appId: "1:967902165647:web:add76ebf91fe8c50070efa",
//   measurementId: "G-3E7V0ZBT7K"
// }

// firebase.initializeApp(config)

// export const auth = firebase.auth()
// export const firestore = firebase.firestore()

// const provider = new firebase.auth.GoogleAuthProvider() // gives access to GoogleAuth Provider class from authentication library (auth)
// provider.setCustomParameters({ prompt: "select_account" }) // we walways want to trigger google prompt whenever we use the google auth
// export const signInWithGoogle = () => auth.signInWithPopup(provider)

// export default firebase