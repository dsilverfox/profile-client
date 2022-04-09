import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';
import Blue from '../../../Assets/Blue.jpg'

class ProjectBlue extends Component {
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
                        src={Blue}
                        alt="Screenshot of MWT Tropical"
                    />
                    <ul className="card-text">
                        <p>
                        <li>Used CSS, Bootstrap, Javascript, React and Node.js to build a site with a team which enabled a user to search for a tropical fruit. Once they had found one, they were able to make notes about what they chose to grow. This was fully CRUD enabled</li>
                        <li>Worked with a team to create this project using GitHub for version management, pushed this project to Heroku both on server and client side.</li>
                        <li>Made 3rd party API calls to fetch plant data. Built our own Express database for notes.</li>
                        </p>
                    </ul>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
                    <p className="card-text">With this project, I worked with two others. Each of us were assigned two endpoints to ensure that we had to work together to generate a working product. Together we built a full-stack application to allow customers to search and take notes on different elements of plant care. Our original API had been retired so half-way through the project we experienced the need to pivot and pull together to meet our deadline.</p>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default ProjectBlue;