import React from "react";

class Ex1 extends React.Component {

    state = {
        isSignedIn: false
    }
    
    change = () => 

        {setTimeout(() => {
            if (this.state.isSignedIn === false) {
                this.setState ({isSignedIn: true})
            } else {
                this.setState ({isSignedIn: false})
            }
        }, 3000)
        
    }

    render () {
        return (
            this.state.isSignedIn === true ? (
                <p onClick = {this.change}>Hello User</p>
            ) : (
                <button onClick = {this.change}>Sign In</button>
            )
        )
    }
}

export default Ex1;