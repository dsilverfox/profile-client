import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Education extends Component {
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
                       Education Information
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='resume-text'>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{fontWeight: 'bold'}}>Eleven Fifty Academy, Web Development Immersive Learning Program, Indianapolis, IN, Graduated: February 24, 2022</li>
                            <li>26-week immersive learning program for Web Development taught with industry-guided curriculum, real-world project-based learning, and 500+ hours of logged coding time and training.</li>
                        </ul>
                    </p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Education;