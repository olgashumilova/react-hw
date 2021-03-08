import React from 'react';
import './styles.css';

class Ex5 extends React.Component {

    render () {
        return (
            this.props.animated === true ? (<div className='loader loader-animated'></div>) : (<button>Load</button>)
        )
    }
}

export default Ex5;