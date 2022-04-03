import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../images/not-found.jpg";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="container mt-5 text-center">
            <div>
                <img className="img-fluid" src={notFoundImg} alt="" />
            </div>
            <button onClick={()=> navigate("/")} className="btn btn-primary">Back to Home</button>
        </div>
    );
};

export default NotFound;
