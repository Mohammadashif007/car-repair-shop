import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const { img, title, price, _id } = useLoaderData();
    const {user} = useContext(AuthContext);
   

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form .date.value;
        const email = user?.email;
        const price = form.price.value;

        const booking = {
            customerName: name,
            date,
            price,
            email,
            title,
            img,
            service_id: _id
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div>
            <h1 className="text-3xl text-center">Book Service: {title}</h1>
            <form onSubmit={handleBookService} className="card-body">
                <div className="grid lg:grid-cols-2 gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder=" Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name="date"
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
                            defaultValue={user? user.email:''}
                            placeholder="Email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amout</span>
                        </label>
                        <input
                            type="text"
                            name="price"
                            defaultValue={'$'+price}
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
