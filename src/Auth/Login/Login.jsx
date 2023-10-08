import React, { useContext } from 'react';
import { AuthContex } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const { loginUser } = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                toast.success('Login Success');
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <>
            <h2 className='text-3xl text-center my-10'>This is login</h2>
            <form onSubmit={handelLogin} className='lg:w-1/2 md:w-3/4 mx-auto'>
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
                    <button className="btn btn-primary text-white">Login</button>
                </div>

                <p className='text-center mt-4 text-sm'>Don't have an Account? <Link to={'/register'} className='text-red-400'>Register</Link></p>
            </form>
            <ToastContainer />
        </>
    );
};

export default Login;