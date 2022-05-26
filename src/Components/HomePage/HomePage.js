import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';
import { getNumberOfCartItems } from '../../Database';
import Header from '../Header/Header';


const HomePage = () => {
    const [foodItem] = useState(dummyData);
    const [category, setCategory] = useState('vegeterian');
    const [cartItemCount, setCartItemCount] = useState(getNumberOfCartItems())

    const handleAddToCart = () => {
        setCartItemCount(getNumberOfCartItems());
    }
    
    return (
        <div>
            
            <Header numberOfCartItems={cartItemCount}></Header>


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

            <div className='food-items'>
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