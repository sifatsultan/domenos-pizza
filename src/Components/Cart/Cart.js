import React, { useState } from 'react';
import './Cart.css'
import dummyData from '../../dummyData/foods';
import { getCartTotal, getDatabaseCart, removeFromDatabaseCart } from '../../Database';
import CartTotal from '../CartTotal/CartTotal';
import CartHeader from '../CartHeader/CartHeader';


const CartItem = (props) => {

    const MAX_BODY_LENGHT = 100
    return (
        <div>
            <div className="product">
                <div className="product-image">
                    <img src={props.image} alt=''></img>
                </div>

                <div className="product-details">
                    <div className="product-title">{props.title}</div>
                    <p className="product-description">{props.description.substring(0, MAX_BODY_LENGHT)} {props.description.length > MAX_BODY_LENGHT ? "..." : ""}</p>
                </div>
                <div className="product-price">{props.price}</div>
                <div className="product-quantity">{props.qty}</div>
                <div className="product-removal">
                    <button className="remove-product" onClick={() => { props.onRemoveItem() }}>
                        Remove
                    </button>
                </div>
                <div className="product-line-price">{props.price * props.qty}</div>
            </div>
        </div>
    )
}


const Cart = () => {

    let databaseCartItems = getDatabaseCart();

    let cartItems = [];
    const [cartDbItems, setCartDbItems] = useState(databaseCartItems);

    function onRemoveItemHandler(key) {
        removeFromDatabaseCart(key)
        setCartDbItems({});
    }


    databaseCartItems.map(item => {
        let cartItem = dummyData.find(f => f.id.toString() === item.key);
        cartItems.push({
            id: item.key,
            qty: item.count,
            title: cartItem.name,
            price: cartItem.price,
            description: cartItem.fullDescription,
            image: cartItem.img,
        });
    });

    return (

        <div className='shopping-cart'>


            {cartItems.length > 0 ? <CartHeader></CartHeader> : ''}

            {
                cartItems.map((cartItem) => {
                    return (
                        <CartItem
                            key={cartItem.id.toString()}
                            id={cartItem.id}
                            title={cartItem.title}
                            qty={cartItem.qty}
                            price={cartItem.price}
                            description={cartItem.description}
                            onRemoveItem={() => { onRemoveItemHandler(cartItem.id) }}
                            image={cartItem.image}>
                        </CartItem>
                    );
                })
            }
            


            {cartItems.length > 0 ? <CartTotal ></CartTotal> : ''}


        </div>

    );
};

export default Cart;