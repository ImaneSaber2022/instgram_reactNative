import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAfZeS0xmJGr6v9kFyTZbFwdI9Yn2LWDLs',
  authDomain: 'instagram-c3d37.firebaseapp.com',
  projectId: 'instagram-c3d37',
  storageBucket: 'instagram-c3d37.appspot.com',
  messagingSenderId: '211294245455',
  appId: '1:211294245455:web:8d78924ab7bd1200eb903a',
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore()

export default {firebase, db};

 