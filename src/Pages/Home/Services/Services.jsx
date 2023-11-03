import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("fake.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="text-center my-10">
            <h1 className="font-bold text-2xl text-[#FF3811]">Service</h1>
            <h2 className="text-4xl font-bold my-4">Our Service Area</h2>
            <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
            </p>
            <div className="grid grid-cols-3 gap-5 py-10">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default Services;
