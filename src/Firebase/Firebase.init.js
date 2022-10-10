import React from "react";
import { initializeApp } from "firebase/app";


const InitializeConfig = () => {
   
    const firebaseConfig = {
        apiKey: "AIzaSyC4JDBCj4dK2t71Dkj6ZFi6VXJizvjPDVU",
        authDomain: "cooking-bird.firebaseapp.com",
        projectId: "cooking-bird",
        storageBucket: "cooking-bird.appspot.com",
        messagingSenderId: "247465410946",
        appId: "1:247465410946:web:902c5aff1513291136cf9b",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
};

export default InitializeConfig;
