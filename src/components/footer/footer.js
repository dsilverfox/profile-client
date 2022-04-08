import React from 'react';
import {Link} from 'react-router-dom'
const Footer = () => {

    return (
        <div className="footer">
            <h1><Link to="/" style={{ textDecoration: 'none', color: '#d87df6', width: '50%', float: 'left' }}>Home</Link></h1>
            <h1><Link to="/certification" style={{ textDecoration: 'none', color: '#d87df6' }}>Certifications</Link></h1>
            <h1><a style={{ textDecoration: 'none', color: '#d87df6', width: '50%', float: 'left' }} href="https://docs.google.com/document/d/14rBgYYtoOI6CCpZkK3Khsp8ErdOGxJ1d/edit?usp=sharing&ouid=113737866647134835732&rtpof=true&sd=true">Download Resume</a></h1>
            <p style={{width: '100%'}}>Copyright© 2022 Devon Silverfox-Patchett</p>
        </div>
    )
}

export default Footer;