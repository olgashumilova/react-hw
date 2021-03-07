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
            (<button onClick = {this.change}>Ингридиенты</button>)
            
            (this.state.visible === true ? 
                (<ul onClick = {this.change}>
                    {this.ingredients.map((item) => <li> {item} </li>)} 
                </ul>)
            : null
        ))
    }
}

export default Ex6;