import React from 'react';
import './CartItemBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


const CartItemBlock = ({ food, removeFromCart }) => {

    return (
        <div className='container'>
            <div className="cart-item-block">
                <div className='product-count-container'>
                    <div className='food-quantity'>
                        <span className='btn'>-</span>
                        <b>{food.qty}</b>
                        <span className='btn'>+</span>
                    </div>
                </div>
                <div className='cart-item-img-container'>
                    <img className="cart-item-img" src={food.img} alt=""></img>
                </div>
                <p className='cart-item-name'>{food.name}</p>
                <p>$<span>{food.price}</span></p>
                <IconButton onClick={removeFromCart} >
                    <CloseIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default CartItemBlock;