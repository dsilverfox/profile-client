import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Technical extends Component {
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
                        Technical Skills
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>
        
                    <ul style={{ listStyle: 'none' }} className='resume-text'>
                            <li><strong>Languages/Libraries:</strong></li>
                            <li>JavaScript, TypeScript, Node.js, React, Express, JWT, Bcrypt</li>
                            <li><strong>Cloud Technologies:</strong></li>
                            <li>Heroku, Firebase, GitHub </li>
                            <li><strong>CI/CD:</strong></li>
                            <li>Agile, Scrum, Git</li>
                            <li><strong>Databases/ORM:</strong></li>
                            <li>PostgreSQL, Sequelize</li>
                            <li><strong>Web Technologies:</strong></li>
                            <li>HTML, CSS, APIs, Responsive Web Design</li>
                            <li><strong>Styling Libraries:</strong></li>
                            <li>Bootstrap, Reactstrap</li>
                        </ul>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Technical;