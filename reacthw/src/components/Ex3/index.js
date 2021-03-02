import React from 'react';

import arrow1 from './arrow1.png'
import arrow2 from './arrow2.png'
import arrow3 from './arrow3.png'

class Ex3 extends React.Component {
    
    state = {
        value: arrow1
    }
    
    change = () => { 

        if (this.state.value === arrow1) {
            this.setState ({value: arrow2})
        } else if (this.state.value === arrow2) {
            this.setState ({value: arrow3})
        } else if (this.state.value === arrow3) {
            this.setState ({value: arrow1})
        }

    }

    render () {
        return <div onClick = {this.change}>
            <img src = {this.state.value} alt = 'img'/>
        </div>
    }
}

export default Ex3;