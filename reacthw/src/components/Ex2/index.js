import React, { Component } from 'react'

class Ex2 extends Component {

    state = {
        value: ''
    }
    
    onChange = (event) => {
        this.setState ({value: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" onChange = {this.onChange}/>
            </div>
        )
    }
}

export default Ex2;
