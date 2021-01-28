import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXFuJ4sT0JNHG-GkEFFjTbZ4upYP8iTXg",
    authDomain: "crown-clothing-db-2676c.firebaseapp.com",
    projectId: "crown-clothing-db-2676c",
    storageBucket: "crown-clothing-db-2676c.appspot.com",
    messagingSenderId: "854026421448",
    appId: "1:854026421448:web:e8cafa3f43cefece8d51fd",
    measurementId: "G-SSG6207LRR"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         })
        } catch (error) {
            console.log('error creating user', error.message)
        }
      }

      return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;