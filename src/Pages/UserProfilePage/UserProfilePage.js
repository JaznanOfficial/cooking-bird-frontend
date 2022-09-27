import React from 'react';
import UserProfileLeft from './UserProfileLeft';
import UserProfileRight from './UserProfileRight';

const UserProfilePage = () => {
    return (
        <div className=' lg:flex lg:flex-row justify-center items-start bg-sky-50 lg:p-12 py-4 gap-4' >
            
            <UserProfileLeft />
            <UserProfileRight/>
            
        </div>
    );
};

export default UserProfilePage;