import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    return (
        <div className="bg-primary p-2 fs-5 sticky-top">
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
