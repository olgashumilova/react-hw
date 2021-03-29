import React from 'react'
import PropTypes from 'prop-types'

class Ex1 extends React.Component {

    render () {
        return (
            <div>

                <span style = {{ padding: `${this.props.padding}rem`}}> {this.props.inputName} </span>
                
                <input
                    type = {this.props.type}
                    placeholder = {this.props.placeholder}
                    onChange = {() => this.props.onChange(console.log('clicked'))}
                />
    
            </div>
        )
    }
}

Ex1.propTypes = {
    padding: PropTypes.number,
    inputName: PropTypes.string,
    type: PropTypes.string,
    resetStyles: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.func.isRequired,
}

Ex1.defaultProps = {
    padding: 1,
    inputName: 'This is an input name',
    type: 'text',
    resetStyles: false,
    placeholder: 'Placeholder'
}

export default Ex1