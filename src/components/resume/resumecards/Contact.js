import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Contact extends Component {
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
                    <h2 className='resume-text'>
                       Contact Information
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <ul style={{ listStyle: 'none' }} className='resume-text'>
                            <li>Devon Silverfox</li>
                            <li><a href="tel:+1-765-610-6134">765-610-6134</a></li>
                            <li><a href="https://github.com/dsilverfox" target="_blank" rel="noreferrer">Github</a></li>
                            <li><a href="https://https://www.linkedin.com/in/devon-silverfox-patchett" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Contact;