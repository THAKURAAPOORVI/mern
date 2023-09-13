import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Stripe from 'stripe';
// button that initiates stripe checkout

export default function Intent({subtotal}) {
    const dispatch = useDispatch();
    // get all cart items
    const cartItems = useSelector(state => state.cartReducer.cartItems);
    const userid = useSelector(state => state.loginUserReducer.currentUser._id);
    const handleClick = () => {
        // call to backend to create checkout session
        axios.post('/api/orders/checkout_session', {cartItems, userid})
            .then(res => {
                // returns checkout session url
                const sessionURL = res.data.url;
                // redirect to stripe checkout page
                window.location.replace(sessionURL)
            })
            .catch(err => console.log(err));
        }
    return <>
    <button className='btn btn-sm float-end' onClick={handleClick}>Pay Now</button>
    </>
}