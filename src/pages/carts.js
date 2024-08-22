import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import "./cart.css"

function Carts() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Load cart items from localStorage
        const cartFromLocal = localStorage.getItem("cart");
        if (cartFromLocal) {
            setCart(JSON.parse(cartFromLocal));
        }
    }, []); // Empty dependency array means this runs once on mount

    function addItemToCart(item) {
        // Add item to state
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        
        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        // localStorage.removeItem('cart');
    }

    return (
        <div>
            <NavBar cart={cart} />
            <div>
            <h1 className='added-products'>Added Products</h1>
            </div>
            
            <div className="container-fluid mt-5">
                <div className="row">
                    {cart.map((item, index) => (
                        <div className="col-md-3" key={item.id}>
                            {/* <Link
                                to="/product"
                                state={{ state: product }}
                            > */}
                                <div className="card shadow">
                                    <img
                                        src={item.thumbnail}
                                        className="card-img-top"
                                        alt={item.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">
                                            <strong>${item.price}</strong>
                                            <br />
                                            <strike>${item.originalPrice}</strike>
                                        </p>
                                        
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>
                    ))}
                </div>
            </div>

            
            
        </div>
    );
}

export default Carts;
