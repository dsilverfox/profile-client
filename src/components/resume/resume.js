import React from 'react';
import { Link } from 'react-router-dom'

const Resume = () => {

    return (
        <div>
            I will hold the embedded resume and the download links
            <button type="button"><Link to="/contact">Contact the Fox!</Link></button>
        </div>
    )
}

export default Resume;