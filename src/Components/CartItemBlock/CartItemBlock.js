import React from 'react';
import './CartItemBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import { Button } from '@mui/material';


const CartItemBlock = ({ food, removeFromCart, incrementProductQty, decrementProductQty }) => {

    return (
        <div className='container'>
            <div className="cart-item-block">
                <div className='cart-item-container'>
                    <ButtonGroup orientation='vertical' size="small" aria-label="vertical small outlined button group">
                        <Button onClick={incrementProductQty}>+</Button>
                        <Button disabled>{food.qty}</Button>
                        <Button onClick={decrementProductQty}>-</Button>
                    </ButtonGroup>
                </div>
                <div className='cart-item-img-container cart-item-container'>
                    <img className="cart-item-img" src={food.img} alt=""></img>
                </div>
                <div className='cart-item-container'>
                    <p className='cart-item-name'>{food.name}</p>
                </div>
                <div className='cart-item-container'>
                    <p>$<span>{food.price}</span></p>
                </div>
                <div className='cart-item-container'>
                    <IconButton onClick={removeFromCart} >
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default CartItemBlock;