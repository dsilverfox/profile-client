import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Objective extends Component {
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
                        Objective
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='resume-text'>
                        Highly creative web development specialist able to complete all aspects of front-end development. A meticulous coder with solid attention to detail and expert-written and oral communication skills. Able to program in various languages, and a lifelong learner,  dedicated to growing in skill level and expertise
                    </p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Objective;