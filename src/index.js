import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Context} from "./context/Context";
import {auth, firestore} from "./firebase/firebase";

// import {getFirestore} from "firebase/firestore"
// import {getAuth} from 'firebase/auth';
//
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyA0PHZoCIL0murFKqX5vyFoq-fEjTnci8Y",
//     authDomain: "realtime-chat-react-fb6a6.firebaseapp.com",
//     projectId: "realtime-chat-react-fb6a6",
//     storageBucket: "realtime-chat-react-fb6a6.appspot.com",
//     messagingSenderId: "18749068996",
//     appId: "1:18749068996:web:7b2859408bc521cfc79b91",
//     measurementId: "G-659JGFV7DN"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//
// const auth = getAuth(app)
// const firestore = getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
    auth,
    firestore
}}>
    <App />
</Context.Provider>

);


