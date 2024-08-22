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
            
            <div className="checkout-cointainer">
                <div className="row">
                    {cart.map((item, index) => (
                        <div className='checkout-cointainer'>
                        <div className="checkout-product">
                        <div>
                          <h2>Delivery date: Wednesday, July 31</h2>
                        </div>
                        <div className="item-payment-container">
                          <div className="cart-container-item">
                            <div className="item-details-container">
                              <div>
                                <img
                                  className="cart-img"
                                  src={item.thumbnail}
                                  alt="Black and Gray Athletic Cotton Socks"
                                />
                              </div>
                              <div className="product-info-container">
                                <div className="product-info-container-description">
                                  <h4>{item.title}</h4>
                                </div>
                                <div>
                                  <p>${item.price}</p>
                                </div>
                                <div>
                                  <p>Quantity: 2</p>
                                  <button>Update</button>
                                  <button>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="delivery-choice-container">
                            <div className="delivery-choice-container-description">
                              <p>Choose a delivery option:</p>
                              <div>
                                <input
                                  type="radio"
                                  name="choice-delivery-radio"
                                  id="delivery-thursday"
                                />
                                <label htmlFor="delivery-thursday">
                                  Thursday, August 8 <p>FREE Shipping</p>
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="choice-delivery-radio"
                                  id="delivery-friday"
                                />
                                <label htmlFor="delivery-friday">
                                  Friday, August 2 <p>$4.99 - Shipping</p>
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name="choice-delivery-radio"
                                  id="delivery-wednesday"
                                />
                                <label htmlFor="delivery-wednesday">
                                  Wednesday, July 31 <p>$9.99 - Shipping</p>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        </div>
                    ))}
                </div>
                <div className='payment-container1'>
                <div className="payment-container">
                            <p>items(0):</p>
                            <p>Shipping & handling:</p>
                            <p>Total before tax:</p>
                            <p>Estimated tax (10%):</p>
                            
                            <h1>Order total:</h1>
                            <h3>Use PayPal <button></button></h3>
                            <button>
                                <h5>place your order</h5>
                            </button>
                            
                
                      </div>
                </div>
            </div>

            
            
        </div>
    );
}

export default Carts;
