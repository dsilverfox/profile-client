import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Functional extends Component {
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
                       Competencies and Functional Skills
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='resume-text'>
                        Problem-solving, troubleshooting, creativity, visual communication, customer service, critical observation, and thinking, organization, learning, and education development, learning theory, Agile methodology, portfolio development, addressing and resolving business challenges
                    </p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Functional;