import React from 'react';
import logo from '../../Images/logo_dominos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import './Header.css'
import { useEffect } from 'react';
import { getNumberOfCartItems } from '../../Database';
import { useState } from 'react';

const Header = ({numberOfCartItems}) => {


    // const [numberOfCartItems, setNumberOfCartItems] = useState(getNumberOfCartItems());

    useEffect(() => {
        console.log(numberOfCartItems);
    })


const mySecret = process.env['GIT_URL']
    return (
        <div>
            {/* <div>
                <p className='site-notice bg-light'> <b> Site work is going on, Work will be done asap. </b></p>
            </div> */}
            <nav className="navbar navbar-expand-lg navbar-light">
                <a href="/"><img className='site-logo' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav nav_links">
                        <li className="nav-item active">
                            <a className="nav-link" href="/login">Login to portal <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a href="/login"><button className='btn-login'>Sign Up</button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;