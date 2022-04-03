import React from "react";
import useReviews from "../../hooks/useReviews";
import LaptopDetails from "../LaptopDetails/LaptopDetails";

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="mt-4 container">
            <h1 className="text-primary text-center fw-bold">Laptop Reviews</h1>
            <LaptopDetails />

            <h2 className="text-center">Customer Reviews (3)</h2>
        </div>
    );
};

export default Home;
