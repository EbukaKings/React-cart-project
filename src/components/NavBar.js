import React, { useEffect, useState } from "react";
import './navbar.css'

function NavBar(props) {
    const [cart, addItemToCart] = useState([]);
    const [cartNum, addItemToNum] = useState(0);

    // Update the cart number when the cart changes
    useEffect(() => {
        const cartFromLocal = localStorage.getItem("cart");
        if (cartFromLocal != null) {
            const parsedCart = JSON.parse(cartFromLocal);
            addItemToCart(parsedCart);
            addItemToNum(parsedCart.length); // Update cartNum based on the length of the cart
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-warning fixed-top" 
             style={{ position: "fixed", top: "0px", zIndex: '1', width: "100%", height: "60px" }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                <img className="amazon-logo" src="/images/amazon-logo.png" alt="Amazon Logo"/>

                </a>

                {/* <div className=".search-bar-container">
                    <input className="search-bar" placeholder="Search"/>
                    <button className="search-button">
                    <img className="search-icon" src="/images/search-icon.png"/>
                    </button>
                    
                </div> */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarmenu">
                <ul className="navbar-nav ms-auto d-flex align-items-end">
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
                        <a className="nav-link" href="/carts">Cart
                            <span className="badge bg-danger">{cartNum}</span> 
                        </a>
                    </li>
                </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default NavBar;
