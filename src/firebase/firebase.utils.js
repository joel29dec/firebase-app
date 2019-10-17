import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBz2KiRIu7cnx59PM7wj2Gufs-GDXiwmhM",
    authDomain: "reactjedi.firebaseapp.com",
    databaseURL: "https://reactjedi.firebaseio.com",
    projectId: "reactjedi",
    storageBucket: "reactjedi.appspot.com",
    messagingSenderId: "922155630782",
    appId: "1:922155630782:web:771d417b32795483241eef"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
