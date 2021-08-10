import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_60EDIT1JxC1eDuUEhUzvwiYyU8R013k",
  authDomain: "messenger-84dbf.firebaseapp.com",
  projectId: "messenger-84dbf",
  storageBucket: "messenger-84dbf.appspot.com",
  messagingSenderId: "830381344259",
  appId: "1:830381344259:web:264379b21282e0eb2f3036",
  measurementId: "G-QEMR9CHJNC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
const authentication = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { authentication, provider };
export default database;