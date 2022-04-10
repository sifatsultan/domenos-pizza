import React, { useState } from 'react';
import './Cart.css'
import dummyData from '../../dummyData/foods';
import { getCartTotal, getDatabaseCart, removeFromDatabaseCart } from '../../Database';


const CartItem = (props) => {

    const MAX_BODY_LENGHT = 100
    return (
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
                    <button className="remove-product" onClick={()=>{removeFromDatabaseCart(props.id);}}>
                        Remove
                    </button>
                </div>
                <div className="product-line-price">{props.price * props.qty}</div>
            </div>
    )
}


const Cart = () => {

    const foods = dummyData;
    let databaseCartItems = getDatabaseCart();
    let total = getCartTotal();
    console.log(databaseCartItems);
    let cartItems = [];
    console.log(foods);
    const [cartDbItems, setCartDbItems] = useState(databaseCartItems);

    function onRemoveItemHandler(key){
        var newCartItems = getDatabaseCart();
        setCartDbItems(newCartItems);
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
        <div className="shopping-cart">
            <div className="column-labels">
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price">Price</label>
                <label className="product-quantity">Quantity</label>
                <label className="product-removal">Remove</label>
                <label className="product-line-price">Total</label>
            </div>
            {cartItems.map((cartItem) => {
                return (
                    <CartItem 
                        key={cartItem.id.toString()} 
                        id={cartItem.id}
                        title={cartItem.title} 
                        qty={cartItem.qty} 
                        price={cartItem.price} 
                        description={cartItem.description} 
                        onRemoveItem={()=>{onRemoveItemHandler(cartItem.id)}}
                        image={cartItem.image}>
                    </CartItem>
                );
            })}



            <div className="totals">
                <div className="totals-item">
                    <label>Subtotal</label>
                    <div className="totals-value" id="cart-subtotal">{total.subtotal}</div>
                </div>
                <div className="totals-item">
                    <label>Tax (5%)</label>
                    <div className="totals-value" id="cart-tax">{total.tax.toFixed(2)}</div>
                </div>
                <div className="totals-item">
                    <label>Shipping</label>
                    <div className="totals-value" id="cart-shipping">{total.shipping}</div>
                </div>
                <div className="totals-item totals-item-total">
                    <label>Grand Total</label>
                    <div className="totals-value" id="cart-total">{total.grand_total.toFixed(2)}</div>
                </div>
            </div>

            <button className="checkout">Checkout</button>

        </div>
    );
};

export default Cart;