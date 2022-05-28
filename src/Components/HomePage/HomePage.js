import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';
import { getCartFoodItems, getNumberOfCartItems, removeFromDatabaseCart } from '../../Database';
import { Drawer, touchRippleClasses } from '@mui/material';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemBlock from '../CartItemBlock/CartItemBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { getCartTotal } from '../../Database';
import { useEffect } from 'react';



const HomePage = () => {
    const [foodItem] = useState(dummyData);
    const cartFoodItems = getCartFoodItems();
    const [category, setCategory] = useState('vegeterian');
    const [cartItemCount, setCartItemCount] = useState(getNumberOfCartItems())
    const [openCart, setOpenCart] = useState(false)
    // const [cartTotal, setCartTotal] = useState(getCartTotal)


    const handleAddToCart = () => {
        setCartItemCount(getNumberOfCartItems());
    }

    const handleRemoveFromCart = (foodId) => {
        removeFromDatabaseCart(foodId);
        setCartItemCount(getNumberOfCartItems());
    }

    const handleOpenCart = () => {
        setOpenCart(true);
    }

    const handleCloseCart = () => {
        setOpenCart(false)
    }

    return (
        <div>

            <div className='badge-shoppingcart'>
                <IconButton onClick={handleOpenCart}>
                    <Badge badgeContent={cartItemCount} color="error">
                        <ShoppingCartIcon color="action" />
                    </Badge>
                </IconButton>
            </div>



            {/* cart item */}
            <Drawer open={openCart} onClose={handleCloseCart}>
                <div className='cart-container'>
                    <h4 className='cart-title'>Cart Items</h4>
                    <div className='food-items'>
                        {
                            cartFoodItems.length > 0 ?
                                (
                                    cartFoodItems.map((food) => {
                                        return (
                                            <CartItemBlock
                                                key={food.id}
                                                food={food}
                                                addToCart={handleAddToCart}
                                                removeFromCart={() => handleRemoveFromCart(food.id)} />
                                        )
                                    })
                                ) :
                                <div className='container-emptywrapper'><p>There are no item in the cart</p></div>
                        }
                    </div>

                    <div className='container-cart-total'>
                        <p>Total: </p>
                        <p>Tax: </p>
                        <p>Gross: </p>

                        <button className='btn-add-to-cart' ><FontAwesomeIcon icon={faCartPlus} /> Checkout</button>

                    </div>


                </div>
            </Drawer>
            {/* cart item */}


            <div>
                <ul className="nav justify-content-center menu-type">
                    <li onClick={() => setCategory('vegeterian')} className="nav-item">
                        <h6 className={category === 'vegeterian' ? "active nav-link" : "nav-link"}>Vegeterian</h6>
                    </li>
                    <li onClick={() => setCategory('meat')} className="nav-item">
                        <h6 className={category === 'meat' ? "active nav-link" : "nav-link"}>Meat</h6>
                    </li>
                </ul>

            </div>

            <div>
                {
                    foodItem.map((food) => {
                        return (
                            food.category === category &&
                            <FoodItemBlock key={food.id} food={food} addToCart={handleAddToCart}></FoodItemBlock>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default HomePage;