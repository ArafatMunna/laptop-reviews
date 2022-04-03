import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import LaptopDetails from "../LaptopDetails/LaptopDetails";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReviews();

    const navigate = useNavigate();

    return (
        <div className="my-4 container">
            <h1 className="text-primary text-center fw-bold">Laptop Reviews</h1>
            <LaptopDetails />

            <h2 className="text-center">Customer Reviews (3)</h2>
            <div className="review-container my-4">
                {reviews.slice(0, 3).map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button
                    onClick={() => navigate(`/reviews`)}
                    className="btn btn-primary"
                >
                    See All Reviews
                </button>
            </div>
        </div>
    );
};

export default Home;
