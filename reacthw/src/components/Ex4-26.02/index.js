import React from 'react';
import './styles.css';

class Ex4 extends React.Component {

    state = {
        animated: false
    }
    
    change = () => {

        if (this.state.animated === true) {
            this.setState ({animated: false})
        } else {
            this.setState ({animated: true})
        }

    }

    render () {
        return (
            this.state.animated === true ? (
                <div onClick = {this.change} className='loader loader-animated'></div>
            ) : (
                <button onClick = {this.change}>Load</button>
            )
        )
    }
}

export default Ex4;