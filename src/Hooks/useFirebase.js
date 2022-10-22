import React, { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import InitializeConfig from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

InitializeConfig();
const useFirebase = (location) => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({});
    const {postData} = useFetch()

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // console.log(location);

    const signInWithGoogle = (location) => {
        return signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                console.log(location);
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signInWithGithub = (location) => {
        return signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
                setLoading(false);
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signUpUser = (data, location) => {
        console.log(data);
        const { name, email, password, photoUrl } = data;
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoUrl,
                });

                setUser(result.user);
                setLoading(false);
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const signInUser = (email, password, location) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                setUser(result.user);
                setLoading(false);
                navigate(location?.state?.from || "/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // update user

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
                setLoading(false);
                setUser(user);
                // console.log(user);
                // user data fetch--------->
                // const name = user.displayName;
                // const email = user.email;
                // const img = user.photoURL;
                // const role = 'user';
                // const status = 'active';
                // const data = { name, email, img, role, status }
                // postData("https://cooking-bird-server-production.up.railway.app/api/v1/users", data)
                
            } else {
                setUser({});
                setLoading(false);
            }
        });
        return () => unsubscribe;
    }, [auth, location, navigate]);

    return {
        signInWithGoogle,
        signInWithGithub,
        signUpUser,
        signInUser,
        user,
        loading,
        setLoading,
        setError,
        logOut,
    };
};

export default useFirebase;
