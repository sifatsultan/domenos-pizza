import React from 'react';
import './FoodItemBlock.css';
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import dummyData from '../../dummyData/foods';
import { addToDatabaseCart } from '../../Database';


const FoodItemBlock = ({ food, addToCart }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);


    const [quantity, setQuantity] = useState(1);
    const totalPrice = quantity * food.price;

    return (

        <div className='container'>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box className="box-fooditem">
                    <div className='item-details'>
                        <div className="row">
                            <div className="col-md-8">
                                <h1>{food.name}</h1>
                                <p>{food.fullDescription}</p>
                                <div className="d-flex flex-row">
                                    <h1 className='item-price'>${totalPrice}</h1>
                                    <div className='food-quantity'>
                                        <span className='btn' onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</span>
                                        <b>{quantity}</b>
                                        <span className='btn' onClick={() => setQuantity(quantity >= 20 ? 20 : quantity + 1)}>+</span>
                                    </div>
                                </div>
                                <br />
                                <button className='btn-add-to-cart' onClick={() => { addToDatabaseCart(food.id, quantity); addToCart() }}><FontAwesomeIcon icon={faCartPlus} /> Add</button>
                            </div>
                            <div className="col-md-4">
                                <img src={food.img} alt="" />
                            </div>
                        </div>
                    </div>
                </Box>

            </Modal>

            <div style={{ margin: '20px 0px' }}>
                <a onClick={handleOpen}>
                    <div className="card food-item-block">
                        <img className="card-img-top" src={food.img} alt=""></img>
                        <h5>{food.name}</h5>
                        <p><small>{food.shortDescription}</small></p>
                        <h4>$<span>{food.price}</span></h4>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default FoodItemBlock;