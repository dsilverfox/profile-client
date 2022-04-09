import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';
import Red from '../../../Assets/Red.jpg'

class ProjectRed extends Component {
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
                        src={Red}
                        alt="Screenshot of MWT Tropical"
                    />
                        <p className='card-text'>
                            <ul>
                                <li>Used CSS, Bootstrap, TypeScript, React (Legacy), and Node.js to build a site which allows users to make notes about the stories they are writing and the characters they are using for each of those stories</li>
                                <li>The stories and characters sections were both fully CRUD capable.</li>
                                <li>Used React-Router-Dom v6 for navigation.</li>
                                <li>Implemented role based access which allowed admin users access to specific routes while protecting those routes from users.</li>
                            </ul>
                        </p>
              
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className='card-text'>This project I worked on solo. It was my first full-stack application build on my own. While I did not meet all of my stretch goals, I did complete release one functionality and continue to work on the site in my spare time even now. I learned a lot with this project, it was my introduction to TypeScript and legacy React. Personally, I prefer my react with hooks. This project stretched my capability and really showed me how much I was able to work through on my own with difficult projects.</p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default ProjectRed;