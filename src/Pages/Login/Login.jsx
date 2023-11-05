import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg"
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(res => {
            const loggedInUser = res.user;
            const user = {email}; 
            // navigate(location?.state?location?.state:'/');
            // get access token
            axios.post('http://localhost:5000/jwt', user)
            .then(res => {
                console.log(res.data)
            })

        })
        .catch(err => {
            console.log(err.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10">
            <div className="hero-content flex gap-4 lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                  <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-5">
                    <form onSubmit={handleSubmit} className="card-body">
                    <h1 className="text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="p-6">New to this site ? <Link to='/signUp' className="text-orange-600 font-bold">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
