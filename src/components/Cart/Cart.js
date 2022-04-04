import React from 'react';
import './Cart.css';
import { AiFillStar } from 'react-icons/ai';


const Cart = ({view}) => {

    const {name, comment, rating} = view;

    // console.log(name, comment, rating);
    return (
        <div className='cart-item'>
            <q>{comment}</q>
            <h3>{name}</h3>
            <h4>Rating: <AiFillStar></AiFillStar> {rating}</h4>
        </div>
    );
};

export default Cart;