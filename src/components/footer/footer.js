import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {

    return (
        <div>
            I will hold all the social networking information as well as the copyright information.
            <button type="button"><Link to="/contact">Contact the Fox!</Link></button>
        </div>
    )
}

export default Footer;