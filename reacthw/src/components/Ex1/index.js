import React, { Component } from 'react'
import './styles.css'

class Ex1 extends Component {

    state = {
        loading: false,
        greeting: ''
    } 

    sayHi = () => {
        this.setState ({loading: false, greeting: 'Hello'})
    }

    onChange = () => {
        setTimeout ((this.sayHi), 3000)
        this.setState ({loading: true, greeting: null})
    }

    render() {

        return (
            <div>
                <button onClick = {this.onChange}>Click me</button>
                
                <div>
                    {this.state.loading && <div className = 'loader'></div> }
                    <p>{this.state.greeting}</p>
                </div>

            </div>
        )
    }
}

export default Ex1;