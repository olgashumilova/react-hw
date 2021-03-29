import React, { Component } from 'react'

class Ex1 extends Component {

    state = {
        phone: '',
        fullName: '',
        password: '',
        confirm: '',
        error: ''
    }

    onLogin = async () => {
        try {
            const url = ''
            const response = await fetch (url, {
            method: 'POST',
            body: JSON.stringify (this.state)
        });
        this.setState({ fullName: response.data, phone: '', fullName: '', password: '' });
        } catch (err) {
            console.log (err.response);
            this.setState ({ error: err.response.data });
        }
    }
    
    onChangeCredentials = (event, fieldName) => {
        this.setState({ [fieldName]: event.target.value, error: '' });
    };

    checkUserData = () => {

        if (!this.state.fullName.length) {
            this.setState({error: 'Enter your name'})

        } else if (this.state.password.length < 8) {
            this.setState({error: 'Your password is too short'})

        } else if (this.state.password !== this.state.confirm) {
            this.setState({error: 'Passwords do not match'})

        } else if (this.state.phone.length !== 13) {
            this.setState({error: 'Wrong phone number'})

        } else if (this.state.phone[0] !== '+') {
            this.setState({error: '+ is missing'})

        } else {
            this.setState({phone: '', fullName: '', password: '', confirm: '', error: ''})
        }

    }

    render() {
        return (
            <div className='container'>
                <input 
                    placeholder='Phone number'
                    value={this.state.phone}
                    onChange={(event) => this.onChangeCredentials(event, 'phone')}
                />

                <input 
                    placeholder='Full name'
                    value={this.state.fullName}
                    onChange={(event) => this.onChangeCredentials(event, 'fullName')}
                />

                <input
                    placeholder='Password'
                    value={this.state.password}
                    onChange={(event) => this.onChangeCredentials(event, 'password')}
                />

                <input
                    placeholder='Confirm password'
                    value={this.state.confirm}
                    onChange={(event) => this.onChangeCredentials(event, 'confirm')}
                />

                <button onClick={this.onLogin}>Sign up</button>

                <p>{this.state.error}</p>
                
            </div>
        )
    }
}

export default Ex1
