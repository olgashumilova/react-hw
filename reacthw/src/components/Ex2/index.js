import React from 'react';

class Ex2 extends React.Component {
    
    state = {
        value: 'X'
    }

    change = () => {

        if (this.state.value === 'X') {
            this.setState ({value: 'V'})
        } else {
            this.setState ({value: 'X'})
        }

    }

    render () {
        return <div onClick = {this.change}>{this.state.value}</div>
    }
}

export default Ex2;