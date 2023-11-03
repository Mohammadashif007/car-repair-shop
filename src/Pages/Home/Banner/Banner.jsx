import React from "react";
import b1 from "../../../assets/images/banner/1.jpg";
import b2 from "../../../assets/images/banner/2.jpg";
import b3 from "../../../assets/images/banner/3.jpg";
import b4 from "../../../assets/images/banner/4.jpg";
import b5 from "../../../assets/images/banner/5.jpg";
import b6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={b1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center gap-5 transform  left-0 top-0 right-5 bg-gradient-to-r bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="  text-white w-1/3 pl-5 space-y-5 ">
                        <h1 className="text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">
                            Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={b2} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center gap-5 transform  left-0 top-0 right-5 bg-gradient-to-r bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="  text-white w-1/3 pl-5 space-y-5 ">
                        <h1 className="text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">
                            Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={b3} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center gap-5 transform  left-0 top-0 right-5 bg-gradient-to-r bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="  text-white w-1/3 pl-5 space-y-5 ">
                        <h1 className="text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">
                            Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={b4} className="w-full rounded-xl" />
                <div className="absolute rounded-xl h-full flex items-center gap-5 transform  left-0 top-0 right-5 bg-gradient-to-r bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className="  text-white w-1/3 pl-5 space-y-5 ">
                        <h1 className="text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h1>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className="flex gap-4">
                            <button className="btn btn-warning">Discover More</button>
                            <button className="btn btn-outline btn-warning">
                            Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
