import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {

    return (
        <div className="footer">
            <h1><Link to="/" style={{ textDecoration: 'none', color: '#d87df6' }}>Home</Link></h1>
            <p>Copyright© 2022 Devon Silverfox-Patchett</p>
        </div>
    )
}

export default Footer;