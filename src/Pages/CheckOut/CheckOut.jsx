import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const { img, title, price } = useLoaderData();
    return (
        <div>
            <h1 className="text-3xl text-center">Book Service: {title}</h1>
            <form className="card-body">
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
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
                            placeholder="password"
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
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                    </div>
                </div>
                <button className="btn btn-block my-4 bg-[#FF3811] text-white text-[18px]">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CheckOut;
