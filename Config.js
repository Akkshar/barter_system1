import firebase from 'firebase';
import db from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCpN93FZSdEYpshwLZ0sxWxu1yAT_Ao0BU",
  authDomain: "barter-system-28e0d.firebaseapp.com",
  databaseURL: "https://barter-system-28e0d.firebaseio.com",
  projectId: "barter-system-28e0d",
  storageBucket: "barter-system-28e0d.appspot.com",
  messagingSenderId: "358617984176",
  appId: "1:358617984176:web:04acbf8291dcfc7512df75"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();