import React from 'react';
import './HomePage.css'
import dummyData from '../../dummyData/foods';
import { useState } from 'react';
import FoodItemBlock from '../FoodItemBlock/FoodItemBlock';


const HomePage = () => {
    const [foodItem] = useState(dummyData);
    const [category, setCategory] = useState('vegeterian');
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center flex-column homepage-banner">
                <div className="p-2">
                    <h1 className='banner-title'>Yummy and delicious pizzas to delight you!</h1>
                </div>
                <div className="p-2">
                    <input className='search-food-item' type="text" placeholder='Search Food Items' />
                    <button className='btn-search' >Search</button>
                </div>
            </div>

            <div>
                <ul className="nav justify-content-center menu-type">
                    <li onClick={()=>setCategory('vegeterian')} className="nav-item">
                        <h6 className={category === 'vegeterian' ? "active nav-link" : "nav-link"}>Vegeterian</h6>
                    </li>
                    <li onClick={()=>setCategory('meat')} className="nav-item">
                        <h6 className={category === 'meat' ? "active nav-link" : "nav-link"}>Meat</h6>
                    </li>
                </ul>

            </div>

            <div className='food-items'>
                {
                    foodItem.map((food) => {
                    return(
                        food.category === category &&
                        <FoodItemBlock key={food.id} food={food}></FoodItemBlock>
                    )
                    })
                }
                
            </div>
        </div>
    );
};

export default HomePage;