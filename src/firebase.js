// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAnZ1hsZuVeeKCi5NUd-nHMrSX5p6RI_YY",
  authDomain: "facebook-clone-c9eaa.firebaseapp.com",
  databaseURL: "https://facebook-clone-c9eaa.firebaseio.com",
  projectId: "facebook-clone-c9eaa",
  storageBucket: "facebook-clone-c9eaa.appspot.com",
  messagingSenderId: "591720195793",
  appId: "1:591720195793:web:4df2528117bd11a2ea47f0",
  measurementId: "G-9DY3YV6CTP"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // access to the database
  const db = firebaseApp.firestore();

  // authentication
  // auth allows us to login and sign in etc
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider}
  export default db ;