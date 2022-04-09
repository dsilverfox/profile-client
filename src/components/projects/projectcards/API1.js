import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';
import API1 from '../../../Assets/API1.PNG'

class ProjectAPI1 extends Component {
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
                        src={API1}
                        alt="Screenshot of Detail Generators"
                    />
                    <ul className='card-text'>
                        <li>Used CSS, Bootstrap 5x, and Javascript to build a site that would allow writers, gamers and others who lose writing time --to researching random details-- to generate those details on demand.</li>
                        <li>Made calls to third party APIs to gather details to be randomly provided.</li>
                        <li>Created Mock API’s for additional details where an API did not exist previously.</li>
                    </ul>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p>This was my first API project. As a writer I often struggle with tiny details of my characters lives. This generator allows me to generate those details saving me research time. In this project I learned to make calls to a 3rd party API and actually created my own mock apis using <a href="https://mockaroo.com/" target="_blank" rel="noopener noreferrer">Mockaroo</a></p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default ProjectAPI1;