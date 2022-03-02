import React from 'react';
import { Link } from 'react-router-dom'
const AboutMe = () => {

    return (
        <div>
            I will hold the About Me cards
            <button type="button"><Link to="/contact">Contact the Fox!</Link></button>
        </div>
    )
}

export default AboutMe;