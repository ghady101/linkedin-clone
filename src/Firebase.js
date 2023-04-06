import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBso8aLBjugfVVS5VTiOtNf-DGj2R9ED3o',
	authDomain: 'linkedin-clone-cc12a.firebaseapp.com',
	projectId: 'linkedin-clone-cc12a',
	storageBucket: 'linkedin-clone-cc12a.appspot.com',
	messagingSenderId: '268301963254',
	appId: '1:268301963254:web:90d5f9a3d137e0899f81d7',
	measurementId: 'G-Z33QHHVNKD',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };
