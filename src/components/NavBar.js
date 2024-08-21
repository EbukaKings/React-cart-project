import React, { useEffect, useState } from "react";

function NavBar(props) {
    const [cart,addItemToCart] = useState([]);

    

    useEffect(() => {
      
        const cartFromLocal = localStorage.getItem("cart");
        if(cartFromLocal != null){
            addItemToCart(JSON.parse(cartFromLocal));

        }
    }, []);
    return (
        <nav className="navbar navbar-expand-sm bg-primary" 
        style={{position:"fixed",top:"0px",zIndex:'1',width:"100%"}}>
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
                            <span className="badge bg-danger">{props.cart.length}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
