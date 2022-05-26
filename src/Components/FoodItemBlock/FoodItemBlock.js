import React from 'react';
import './FoodItemBlock.css';
import Modal from '@mui/material/Modal'
import { Box } from '@mui/system';
import { useState } from 'react';

const FoodItemBlock = ({food, addToCart }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        addToCart();
    }
    const handleClose = () => setOpen(false);

    return (

        <div className='container'>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-fooditem">
                    <p>Hello</p>
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