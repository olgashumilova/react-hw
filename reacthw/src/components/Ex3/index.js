import React, { Component } from 'react'

class Ex3 extends Component {

    render() {
        return (
            <div>

                <button onClick = {this.props.clickFunction}>
                    {this.props.label} 
                </button>

            </div>
        )
    }
}

export default Ex3
