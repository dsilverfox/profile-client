import React, { Component } from 'react';

import ReactCardFlip from 'react-card-flip';

class Work extends Component {
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
                        Current Design Positions
                    </h2>
                    <button onClick={this.handleClick}>Flip Card</button>
                </div>

                <div style={this.props.styles.card}>

                    <ul style={{ listStyle: 'none' }} className='resume-text'>
                        <li style={{ fontWeight: 'bold' }}>Share and Make Aware:</li>
                        <li style={{ fontWeight: 'bold' }}> Volunteer Web Designer - WordPress</li>
                        <li>Design new WordPress pages for a variety of functions.</li>
                        <li>Create new pages from the ground up using selected themes.</li>
                        <li>Update pages with new information.</li>
                        <li style={{ fontWeight: 'bold' }}>Write of Passion:</li>
                        <li style={{ fontWeight: 'bold' }}> Volunteer Webmaster - WordPress</li>
                        <li>Orchestrate website rollout to meet re-branding deadlines.</li>
                        <li>Create new pages from the ground up using selected themes.</li>
                        <li>Update pages with new information.</li>
                    </ul>

                    <button onClick={this.handleClick}>Flip Card</button>
                </div>
            </ReactCardFlip>
        );
    }
}

export default Work;