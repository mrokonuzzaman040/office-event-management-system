import React, { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContex);
    const { displayName, email, photoURL } = user;
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-5">
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={photoURL} />
                </div>
            </div>
            <div className="">
                <h2 className='font-normal'>Name: {displayName}</h2>
                <h2 className='font-normal'>Email: {email}</h2>
            </div>
        </div>

    );
};

export default Profile;