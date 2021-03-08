import React from "react";

import './styles.css'

class Ex2 extends React.Component {

    state = {
        italic: false
    }
    
    change = () => {

        if (this.state.italic) {
            this.setState ({italic: false})
        } else {
            this.setState ({italic: true})
        }

    }

    render () {
        return (
            <p onClick = {this.change} className = {this.state.italic === true ? 'italic-text' : ''}>{this.props.text}</p>
        )
    }
}

export default Ex2;