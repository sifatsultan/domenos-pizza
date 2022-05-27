import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';
import { getCartFoodItems, getNumberOfCartItems, removeFromDatabaseCart } from '../../Database';
import { Drawer } from '@mui/material';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Header from '../Header/Header';
import CartItemBlock from '../CartItemBlock/CartItemBlock';


const HomePage = () => {
    const [foodItem] = useState(dummyData);
    const cartFoodItems = getCartFoodItems();
    const [category, setCategory] = useState('vegeterian');
    const [cartItemCount, setCartItemCount] = useState(getNumberOfCartItems())
    const [openCart, setOpenCart] = useState(false)

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


            <Drawer open={openCart} onClose={handleCloseCart}>
                <div className='food-items'>
                    {
                        cartFoodItems.map((food) => {
                            return (
                                <CartItemBlock
                                    key={food.id}
                                    food={food}
                                    addToCart={handleAddToCart}
                                    removeFromCart={() => handleRemoveFromCart(food.id)} />
                            )
                        })
                    }

                </div>
            </Drawer>


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