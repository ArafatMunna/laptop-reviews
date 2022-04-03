import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-primary p-3 fs-5">
            <div className="container d-flex justify-content-between">
                <Link className="text-white text-decoration-none" to="/">
                    <h3>Laptop Reviews</h3>
                </Link>
                <div>
                    <NavLink
                        className="text-white text-decoration-none me-4"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="text-white text-decoration-none me-4"
                        to="/reviews"
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        className="text-white text-decoration-none me-4"
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="text-white text-decoration-none"
                        to="/blogs"
                    >
                        Blogs
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
