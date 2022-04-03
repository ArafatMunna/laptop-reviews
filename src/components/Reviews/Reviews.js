import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className="container">
            <h2 className="text-center mt-4">Customers All Reviews</h2>
            <div className="review-container my-4">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;
