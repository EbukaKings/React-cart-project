import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    LOGO
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact-us">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart
                            <span className="badge bg-danger">1</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
