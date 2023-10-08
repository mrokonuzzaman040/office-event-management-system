import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg'
import { AuthContex } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContex);

    const handelSignout = () => {
        logoutUser()
            .then(result => {
                toast.success('Logout Success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to={'/'} className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Office Time</span>
                    </Link>
                    <div className="flex items-center">
                        {
                            user ? <div className="flex items-center flex-row-reverse gap-2">
                                <button className='btn btn-sm' onClick={handelSignout}>Signout</button>
                                <Link to={'/profile'} className="btn btn-ghost btn-circle avatar">
                                    <img className='rounded-full' src={user.photoURL} />
                                </Link>
                            </div> : <Link to={'/login'}>
                                <button className='btn btn-sm'>Login</button>
                            </Link>
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <Link to='' className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to='/events' className="text-gray-900 dark:text-white hover:underline">Events</Link>
                            </li>
                            <li>
                                <Link to='' className="text-gray-900 dark:text-white hover:underline">Team</Link>
                            </li>
                            <li>
                                <Link to='' className="text-gray-900 dark:text-white hover:underline">Features</Link>
                            </li>
                            <li>
                                <Link to='speakers' className="text-gray-900 dark:text-white hover:underline">Speakers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;