import firebase from "@firebase/app";
import "@firebase/firestore";

const config = {
    apiKey: "<AIzaSyDif_7LrotHpIn49poKNpQQYW9zwz7T8Z0>",
    authDomain: "<quick-todo-2ba0c.firebaseapp.com >",
    databaseURL: "<https://console.firebase.google.com/project/quick-todo-2ba0c/database/firestore/data~2F>",
    projectId: "<project-731469453252>",
    storageBucket: "gs://quick-todo-2ba0c.appspot.com",
    messagingSenderId: "<messagingSenderId>"
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;
