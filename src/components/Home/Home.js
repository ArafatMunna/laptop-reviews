import React from "react";
import images from "../../images/apple.jpg";

const Home = () => {
    return (
        <div className="mt-4 container">
            <h1 className="text-primary text-center">Laptop Reviews</h1>
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <h2>MacBook Air</h2>
                    <p>
                        The MacBook Air is the best MacBook for most people.
                        This latest model demonstrates the capabilities of
                        Apple's M1 chip, which transforms the Air from an
                        underpowered entry-level option to one of the fastest
                        laptops on the market, period. It's a complete
                        turnaround for a laptop that was just barely getting by
                        each year.{" "}
                    </p>
                    <p>
                        <b>Specification:</b> CPU: M1GPU: M1 (integrated)RAM:
                        8GB/16GBStorage: 256GB/512GB/1TB/2TBDisplay: 13.3
                        inches, 2560 x 1600 pixelsSize: 12 x 8.4 x 0.6
                        inchesWeight: 2.8 pounds
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="w-75 mx-auto">
                        <img className="img-fluid rounded-3" src={images} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
