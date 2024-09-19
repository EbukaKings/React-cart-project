import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import "./cart.css"
import { PaystackButton } from 'react-paystack';

function Carts() {
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);


    const publicKey = "pk_test_d98edce4c83a28dffc917252c37b79d865b9e45b";

    const [ email, setEmail] = useState("");
    const [ amount, setAmount] = useState("");
    const [ name, setName] = useState("");
    const [ phone, setPhone] = useState("");

    const componentProps = {
      email,
      amount: amount * 100,
      metadata: {
        name,
        phone,
      },
      publicKey,
      text: "Cheeckout",
      onSuccess: () =>
        alert("Checkout successful"),
      onclose: () => alert("Checkout unsuccessful"),
    }


    useEffect(() => {
        // Load cart items from localStorage
        const cartFromLocal = localStorage.getItem("cart");
        if (cartFromLocal) {
            setCart(JSON.parse(cartFromLocal));
        }
        console.log(cart);
        
        for(var i =0; i < cart.length; i++){
          setTotal((total+cart[i].price));
          
        //  / console.log(cart[i].price)
        //  var oldTodal = total;
        //  var newTotal = oldTodal + cart[i].price;
        //   setTotal(newTotal);
        //  console(newTotal);
        console(total);
        }
    
       // setTotal(1+100)
    }, []); 
    // Empty dependency array means this runs once on mount
    useEffect(() => {
      // Calculate total when cart changes
      const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
      setTotal(totalAmount);
  }, [cart]);

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
      // Assuming cart is an array of products
      const updatedCart = cart.filter(item => item !== product);
      
      // Update the cart state
      setCart(updatedCart);
      
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
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
                            <h3>Use PayPal <button></button></h3>
                            <button>
                                <h5>place your order</h5>
                            </button>
                            
                
                      </div>

                      <input type='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}/>
                      <input type='number' placeholder='Amount' className='form-control' value={amount} onChange={(e) => setAmount(e.target.value)}/>
                      <input type='text' placeholder='Name' className='form-control' value={phone} onChange={(e) => setName(e.target.value)}/>
                      <input type='number' placeholder='phone number' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                      <PaystackButton className='btn btn-primary mt-3' {...componentProps}/>
                </div>

            </div>

            
            
        </div>
    );
}

export default Carts;
