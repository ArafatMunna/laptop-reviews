import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <div className="bg-primary p-2 fs-5">
            {/* <div className="container d-flex justify-content-between">
                <Link className="text-white text-decoration-none" to="/">
                    <h3>Laptop Reviews</h3>
                </Link>
                <div>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-warning text-decoration-none me-4"
                                : "text-white text-decoration-none me-4"
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-warning text-decoration-none me-4"
                                : "text-white text-decoration-none me-4"
                        }
                        to="/reviews"
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-warning text-decoration-none me-4"
                                : "text-white text-decoration-none me-4"
                        }
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-warning text-decoration-none"
                                : "text-white text-decoration-none"
                        }
                        to="/blogs"
                    >
                        Blogs
                    </NavLink>
                </div>
            </div> */}

            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand
                        className="text-white fw-bold fs-3"
                        as={Link}
                        to="/"
                    >
                        Laptop Reviews
                    </Navbar.Brand>
                    <Navbar.Toggle
                        variant="light"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={CustomLink} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={CustomLink} to="/reviews">
                                Reviews
                            </Nav.Link>
                            <Nav.Link as={CustomLink} to="/dashboard">
                                Dashboard
                            </Nav.Link>
                            <Nav.Link as={CustomLink} to="/blogs">
                                Blogs
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
