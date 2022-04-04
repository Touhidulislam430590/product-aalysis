import React from 'react';
import './Cart.css';

const Cart = ({view}) => {

    const {name, comment, rating} = view;

    // console.log(name, comment, rating);
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Comment: {comment}</p>
            <h4>Rating: {rating}</h4>
        </div>
    );
};

export default Cart;