import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';
import CSSCreature from '../../../Assets/CSSCreature.PNG'

class ProjectCSSCreature extends Component {
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
                        src={CSSCreature}
                        alt="Screenshot of CSS Creature"
                    />
                    <p className="card-text">CSS 3 to design & build a pure CSS creature.</p>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='card-text'>This project taught us the power of CSS. Prior to this we had used CSS only to style basic page elements. This project was designed to show us the other things that CSS was capable of such as basic illustration and animation of images.</p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default ProjectCSSCreature;