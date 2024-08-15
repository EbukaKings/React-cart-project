import React from "react";

function ContactUs() {
    return (
        <div>
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
                        <a className="nav-link" href="#/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contactus">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#register">Register</a>
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
        <h1>Support</h1>
        <h4>Home</h4>
        <h1>Support Form:</h1>
        <p>Name:<input></input></p>
        </div>
    );
}

export default ContactUs;
