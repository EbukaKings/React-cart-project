import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import "./cart.css"
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Carts() {

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/paystack', { state: { totalAmount: total } });
};
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);


    
    useEffect(() => {
      // Load cart items from localStorage
      const cartFromLocal = localStorage.getItem("cart");
      if (cartFromLocal) {
          const parsedCart = JSON.parse(cartFromLocal);
          setCart(parsedCart);
          calculateTotal(parsedCart);
      }
  }, []);
    // Empty dependency array means this runs once on mount
  //   useEffect(() => {
  //     // Calculate total when cart changes
  //     const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  //     setTotal(totalAmount);
  // }, [cart]);
  const calculateTotal = (cartItems) => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(totalAmount);
};

    function addItemToCart(item) {
        // Add item to state
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        
        // Save updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        // localStorage.removeItem('cart');
    }
    // function removeFromCart(productId)  {
    //   setCart(cart.filter(item => item.id !== productId));
    // };
    function removeFromCart2(product) {
        const updatedCart = cart.filter(item => item !== product);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        calculateTotal(updatedCart); // Recalculate total after removal
    }
    
  

    return (
        <div>
            <NavBar cart={cart} />
            <div style={{ marginTop: '80px' }}>
            <h1 className='added-products'>Added Products</h1>
            </div>
            
            <div className="checkout-cointainer">
                <div className="row">
                    {cart.map((item, id) => (
                     
                        <div key={item.id} className='checkout-cointainer'>
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
                                  src={item.images}
                                  alt="Black and Gray Athletic Cotton Socks"
                                />
                              </div>
                              <div className="product-info-container">
                                <div className="product-info-container-description">
                                  <h4>{item.name}</h4>
                                </div>
                                <div>
                                  <p>${item.price}</p>
                                </div>
                                <div>
                                  <p>Quantity: 1</p>
                                  <button>Update</button>
                                  <button onClick={() => removeFromCart2(item)}>Delete</button>
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
                                  Wednesday, July 3 <p>$9.99 - Shipping</p>
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
                            
                            <h1>Order total:() ${total}</h1>
                           
                            <div className='paypal-div'>
                            <button className='paypal-button'>
                                <h5>PayPal</h5>
                            </button>
                            </div>
                            <Link to="/paystack">
                            <div className='paystack-div'>
                            <button onClick={handleCheckout} className='paystack-button'>
                                <h5>paystack</h5>
                            </button>
                            </div>
                            </Link>
                      </div>

                      
                </div>

            </div>

            
            
        </div>
    );
}

export default Carts;
