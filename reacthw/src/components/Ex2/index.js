import React, { Component } from 'react'

class Ex2 extends Component {

    state = {
        number: 0,
        clicked: true,
    }

    onClick = () => {

    }

    plus = () => {
        if (this.state.clicked === true) {
            this.setState({number : this.state.number + 1});
        }
    }

    minus = () => {
        if (this.state.clicked === true) {
            this.setState({number : this.state.number - 1});
        }
    }

    render() {
        return (
            <div>
                <button onClick = {this.plus}> + </button>
                <span> {this.state.number} </span>
                <button onClick = {this.minus}> - </button>
            </div>
        )
    }
}

export default Ex2
