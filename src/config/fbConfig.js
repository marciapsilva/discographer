  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  var config = {
    apiKey: "AIzaSyDhIygZfJUB1sPM092wUNm7nRvY-YxwiDc",
    authDomain: "discographerapp.firebaseapp.com",
    databaseURL: "https://discographerapp.firebaseio.com",
    projectId: "discographerapp",
    storageBucket: "discographerapp.appspot.com",
    messagingSenderId: "107827933634"
  };
  firebase.initializeApp(config);

  export default firebase;