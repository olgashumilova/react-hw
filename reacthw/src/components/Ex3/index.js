import React from "react";
import './styles.css'

class Square extends React.Component {

    render() {
      return(
        <div className = {this.props.cssClass}>
           {this.props.label}
        </div>
      )
    }
}

export default Square;