import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">{title}</h2>
                <div className="flex justify-between ">
                    <p className="text-start text-2xl text-[#FF3811]">
                        Price : ${price}
                    </p>
                    <Link to={`/checkOut/${_id}`}>
                        <button className="btn">
                            {" "}
                            Book Now
                            <i className="text-end text-2xl text-[#FF3811]">
                                <AiOutlineArrowRight></AiOutlineArrowRight>
                            </i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
