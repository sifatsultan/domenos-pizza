import React from 'react';
import './CartItemBlock.css';

const CartItemBlock = ({ food, addToCart, removeFromCart }) => {

    return (
        <div className='container'>
            <div style={{ margin: '20px 0px' }}>
                <div className="card cart-item-block">
                    <img className="card-img-top" src={food.img} alt=""></img>
                    <h5>{food.name}</h5>
                    <h4>$<span>{food.price}</span></h4>
                    <button onClick={removeFromCart}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItemBlock;