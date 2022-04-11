import React, { useState } from 'react';
import "../Cart/Cart.css";
import { getCartTotal } from '../../Database';


const CartTotal = () => {

    let total = getCartTotal();

    return (
        <div>
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


    )
}

export default CartTotal;