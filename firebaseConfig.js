import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyChTKhYWJw125lQ1vSf_mg4cuuqnzS8TfA',
  authDomain: 'project-id.firebaseapp.com',
  databaseURL: 'https://matchoji-7455a-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'matchoji-7455a',
  appId: '1:1066938935657:android:45ca026f6d7e97c6d335f8',

};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
