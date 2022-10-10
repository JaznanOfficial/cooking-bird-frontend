import React, { useEffect, useState } from "react";
import {
    getAuth,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import InitializeConfig from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";

InitializeConfig();
const useFirebase = (location) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    console.log(location)
    
    const signInWithGoogle = (location) => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const logOut = () => {
        return signOut(auth)
            .then((result) => {})
            .catch((error) => {
                console.log(error);
            });
    };

    //
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(true);
            if (user) {
                console.log(user);
                setUser(user);
                setLoading(false);
                navigate(location)
            } else {
                setUser({});
                setLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth,location]);

    return {
        signInWithGoogle,
        signInWithGithub,
        user,
        loading,
        setLoading,
        setError,
        logOut,
    };
};

export default useFirebase;
