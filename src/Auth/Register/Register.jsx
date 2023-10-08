import React, { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser, upDateProfile } = useContext(AuthContex);
    const lcoate = useLocation();
    const navogate = useNavigate()

    const handelRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long');
        } else if (!passwordRegex.test(password)) {
            toast.error('Password must contain at least one capital letter, one special character, and one number');
        } else {
            createUser(email, password)
            .then(result => {
                upDateProfile(name, photo)
                    .then(result => {
                        toast.success('Register Successfully');
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
                navogate(lcoate?.state ? lcoate.state : '/profile');
            })
            .catch(error => {
                toast.error(error.message);
            })
        }
    }

    return (
        <div>
            <h2 className='text-3xl text-center my-10'>Register</h2>
            <form onSubmit={handelRegister} className='lg:w-1/2 md:w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary text-white">Register now</button>
                </div>

                <p className='text-center mt-4 text-sm'>Allready have an account? <Link to={'/login'} className='text-red-400'>Login</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;