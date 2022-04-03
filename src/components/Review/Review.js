import React from "react";

const Review = ({ review }) => {
    const { name, feedback, rating } = review;
    return (
        <div
            className="border border-3 rounded-3 shadow
        border-primary p-3"
        >
            <h4>{name}</h4>
            <p>
                <b>Review:</b> {feedback}
            </p>
            <p>
                <b>Rating:</b> {rating}
            </p>
        </div>
    );
};

export default Review;
