import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((sum, cart) => sum + parseFloat(cart.price), 0);
    return (
        <div className="cart">
            <h5>Enrolled Course:{cart.length}</h5>
            <h6>Total Price:${totalPrice.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;