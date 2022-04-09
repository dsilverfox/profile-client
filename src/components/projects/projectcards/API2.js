import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';
import API2 from '../../../Assets/API2.PNG'

class ProjectAPI2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <div style={this.props.styles.card}>
                    <img
                        style={this.props.styles.image}
                        src={API2}
                        alt="Screenshot of Detail Generators"
                    />
                    <p className='card-text'>Used CSS, Bootstrap and Javascript to build a site that would pull a random holiday for a selected country and year.</p>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='card-text'>This was my second API project, this time I used API calls that required a variety of information from a pair of arrays to provide the correct country information in order to correctly call the function. I had to create a second array and compare the two to get the correct information to plug into the fetch. I also learned about creating overlays during this project using pseuo-elements ::before and ::after to ensure that the overlay worked properly. I also used media queries to actively change the size of the text based on the number of characters in the card.</p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default ProjectAPI2;