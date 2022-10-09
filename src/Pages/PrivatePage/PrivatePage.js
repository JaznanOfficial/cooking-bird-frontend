import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import useFirebase from '../../Hooks/useFirebase';

const PrivatePage = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useFirebase()
    if (loading) {
        <RingLoader color="#E32D36" />
    }
    return (
        user.auth?children: <Navigate to={'sign-in'} state={{from:location}}></Navigate>
    );
};

export default PrivatePage;