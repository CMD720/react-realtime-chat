import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Context} from "./context/Context";
import {auth, firestore} from "./firebase/firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value={{
    auth,
    firestore
}}>
    <App />
</Context.Provider>

);


