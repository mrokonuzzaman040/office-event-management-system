import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                                <NavLink to=''  className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/events'  className="text-gray-900 dark:text-white hover:underline">Events</NavLink>
                            </li>
                            <li>
                                <NavLink to='services'  className="text-gray-900 dark:text-white hover:underline">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to='contact'  className="text-gray-900 dark:text-white hover:underline">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'  className="text-gray-900 dark:text-white hover:underline">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;