import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkBHdXuLV5zwofvwhcUgijE15__9oCvMw",
    authDomain: "facebook-clone-81527.firebaseapp.com",
    databaseURL: "https://facebook-clone-81527.firebaseio.com",
    projectId: "facebook-clone-81527",
    storageBucket: "facebook-clone-81527.appspot.com",
    messagingSenderId: "700130552691",
    appId: "1:700130552691:web:47c32d4e87e4c89bf2b306",
    measurementId: "G-1DY5YXGPTV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;