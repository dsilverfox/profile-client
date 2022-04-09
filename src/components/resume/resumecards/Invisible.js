import React, { Component } from 'react';

class Invisible extends Component {
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

                <div style={this.props.styles.card2}>

                </div>
        );
    }
}

export default Invisible;