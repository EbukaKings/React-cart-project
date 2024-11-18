import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import "./cart.css"
import { PaystackButton } from 'react-paystack';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Carts() {

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/paystack', { state: { totalAmount: total }, replace: true });

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
            <div className='main'>
            <div style={{ marginTop: '80px' }}>
            <div className='page-title'>Review your order </div> 
            </div>
            
            <div className="checkout-grid">
                <div className="order-summary">
                  
                    {cart.map((item, id) => (
                     
                        <div key={item.id} className='cart-item-container'>
                        <div className="checkout-product">
                        <div className='delivery-date'>
                          Delivery date: Wednesday, July 31
                        </div>
                        <div className="cart-item-details-grid">
                        <img
                                  className="product-image"
                                  src={item.images}
                                  alt="Black and Gray Athletic Cotton Socks"
                                />
                          <div className="cart-item-details">
                              
                                <div className="product-name">
                                  <h4>{item.name}</h4>
                                </div>
                                <div className='product-price'>
                                  ${item.price}
                                </div>
                                <div className='product-quantity'>
                                  <span>Quantity: <span class="quantity-label">{}</span></span>
                                  <span class="update-quantity-link link-primary">
                                  Update
                                  </span>
                                  <span className='delete-quantity-link link-primary' onClick={() => removeFromCart2(item)}>
                                  Delete
                                  </span>
                                </div>
                              
                            
                          </div>
                          <div className="delivery-options">
                          <div class="delivery-options-title">
                          Choose a delivery option:
                          </div>
                        
                          </div>
                              
                  
                            </div>
                          </div>
                        </div>
                          ))}
                </div>
                <div className='payment-summary'>
                <div className="payment-summary-title">
                <div class="payment-summary-row">
                  <div>Items ({cart.length}):</div>
                  <div className="payment-summary-money">${total}</div>
                </div>
                <div class="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div class="payment-summary-money">$0:00</div>
                </div>
                <div class="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div class="payment-summary-money">${total}</div>
                </div>

                <div class="payment-summary-row">
                <div>Estimated tax (0%):</div>
                <div class="payment-summary-money">0</div>
                </div>
                            
                <div class="payment-summary-row total-row">
                <div>Order total:</div>
                <div class="payment-summary-money">${total}</div>
                </div>
                           
                            <div className='paypal-div'>
                            <div className='paypal-button'>
                               <div>PayPal</div>
                            </div>
                            </div>
                            <Link className='underline' to="/paystack">
                            <div className='paystack-div'>
                            <div onClick={handleCheckout} className='paystack-button'>
                                <div>Paystack</div>
                            </div>
                            </div>
                            </Link>
                      </div>

                      
                </div>
            </div>
            
           </div>


                
        </div>  
    );
}

export default Carts;
