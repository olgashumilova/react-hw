import React from 'react';
import './styles.css';

class Ex6 extends React.Component {

    state = {
        visible: true
    }

    change = () => {

        if (this.state.visible === true) {
            this.setState ({visible: false})
        } else {
            this.setState ({visible: true})
        }

    }

    render () {
        return (
            this.state.visible === true ? (<button onClick = {this.change}>Ингридиенты</button>) : (<li onClick = {this.change}>Пепперони</li>)
        )
    }
}

export default Ex6;