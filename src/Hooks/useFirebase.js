import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import InitializeConfig from "../Firebase/Firebase.init";

InitializeConfig()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result)
            setUser(result.user)
            console.log(user);
            setLoading(false)
            const { displayName, email } = user;
            console.log(displayName,email)
            })
            .catch((error) => {
            console.log(error);
        })
    };

    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser({});
            }
        });
        return () => unsubscribe;
    }, []);

    return {
        signInWithGoogle,
        user,
        setLoading,
        setError
    };
};

export default useFirebase;
