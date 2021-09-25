import './Cart.css'

import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const {cart} =props;

   
    return (
        <div className="cart">
            <h2>Order summary</h2>
            <h4>Items Ordered {cart.length}</h4>
            <ol> 
                Items
            {
                cart.map(meal => <li>{meal.strMeal}</li>)
            }
            </ol>
        </div>
    );
};

export default Cart;