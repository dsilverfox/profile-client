import React from 'react';
import {Link} from 'react-router-dom'
const InProgress = () => {

    return(
        <div>
            This build is currently in progress.
            <button type="button"><Link to="/contact">Contact the Fox!</Link></button>
        </div>
    )
}

export default InProgress