import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "AIzaSyDif_7LrotHpIn49poKNpQQYW9zwz7T8Z0",
    authDomain: "quick-todo-2ba0c.firebaseapp.com",
    databaseURL: "https://quick-todo-2ba0c.firebaseio.com",
    projectId: "quick-todo-2ba0c",
    storageBucket: "quick-todo-2ba0c.appspot.com",
    messagingSenderId: "731469453252",
    appId: "1:731469453252:web:8b222da757db14b9"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;
