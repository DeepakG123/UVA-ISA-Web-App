import firebase from "firebase";

const API_KEY = "AIzaSyB7CTg-bOZVY7thjI_n6pdjjtao0L_QDoA";
const SENDER_ID = "473910493482";

const config = {
  apiKey: "AIzaSyB7CTg-bOZVY7thjI_n6pdjjtao0L_QDoA",
  authDomain: "isa-web-app.firebaseapp.com",
  databaseURL: "https://isa-web-app.firebaseio.com",
  projectId: "isa-web-app",
  storageBucket: "isa-web-app.appspot.com",
  messagingSenderId: "473910493482"
};

const fire = firebase.initializeApp(config);
export default fire;
