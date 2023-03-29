import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyAVGyT0TQagWgkOTvbw-6ZSPX5t8A84-v4",
    authDomain: "code-store-cac5b.firebaseapp.com",
    databaseURL: "https://code-store-cac5b.firebaseio.com",
    projectId: "code-store-cac5b",
    storageBucket: "code-store-cac5b.appspot.com",
    messagingSenderId: "353799493169"
};

var fire = firebase.initializeApp(config);
export default fire;