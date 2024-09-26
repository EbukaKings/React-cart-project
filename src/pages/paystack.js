import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';

function Paystack() {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0; // Default to 0 if not set

    const publicKey = "pk_test_d98edce4c83a28dffc917252c37b79d865b9e45b";

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(totalAmount); // Set initial amount to totalAmount
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        // Set amount immediately when the component mounts
        setAmount(totalAmount);
    }, [totalAmount]);

    const componentProps = {
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Checkout",
        onSuccess: () => alert("Checkout successful"),
        onclose: () => alert("Checkout unsuccessful"),
    };

    return (
        <div>
            <div className='paystack-details-div'>
                <p>Put In Your Details</p>
                <input 
                    type='email' 
                    placeholder='Email' 
                    className='form-control' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='number' 
                    placeholder='Amount' 
                    className='form-control' 
                    value={amount} 
                    // readOnly // Set as readOnly if you don't want to allow edits
                />
                <input 
                    type='text' 
                    placeholder='Name' 
                    className='form-control' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type='number' 
                    placeholder='Phone Number' 
                    className='form-control' 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                />
                <PaystackButton className='btn btn-primary mt-3' {...componentProps} />
            </div>
        </div>
    );
}

export default Paystack;
