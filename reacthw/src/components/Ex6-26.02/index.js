import React from 'react';

class Ex6 extends React.Component {

    state = {
        visible: true
    }

    ingredients = ['Соус', 'Салат', 'Огурец', 'Помидор']

    change = () => {

        if (this.state.visible === true) {
            this.setState ({visible: false})
        } else {
            this.setState ({visible: true})
        }

    }

    render () {
        return (
            this.state.visible === true ? 
                (<button onClick = {this.change}>Ингридиенты</button>)
            : 
                (<ul onClick = {this.change}>
                    {this.ingredients.map((item) => <li> {item} </li>)} 
                </ul>)
        )
    }
}

export default Ex6;