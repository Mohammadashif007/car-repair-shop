import React, { useContext } from "react";
import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value; 
        const email = form.email.value; 
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(res => {
            const result = res.user;
            console.log(result)
        })
        .catch(err => {
            console.log(err.message);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10 py-20">
            <div className="hero-content flex gap-4 lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100 ml-5">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                    <p className="p-6">
                        Already have an account ?{" "}
                        <Link
                            to="/login"
                            className="text-orange-600 font-bold"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
