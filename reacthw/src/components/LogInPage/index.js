import React, {useEffect, useState} from 'react'

import axios from 'axios'

const LogInPage = () => {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    const onChangeCredentials = (event, fieldName) => {

        if (fieldName === 'phone') {
            setPhone(event.target.value)
            setError('')
        }
        if (fieldName === 'password') {
            setPassword(event.target.value)
            setError('')
        }
    }

    const login = async () => {
        try {
          const response = await axios.post('http://localhost:3001/auth/sign-in', {
            phone,
            password,
          });
          setUser(response.data)
          setPhone('')
          setPassword('')
        } catch (err) {
          console.log(err.response);
          setError(err.response.data);
        }
    }

    useEffect(() => {
        if (password.length === 3 && phone.length === 12) {
            login()
        }
    }, [password, phone, login])

    return (
        <div className="page-sign-in">
            <input
                type="text"
                placeholder="phone number"
                onChange={(event) => onChangeCredentials(event, 'phone')}
                value={phone}
            />

            <input
                type="text"
                placeholder="password"
                onChange={(event) => onChangeCredentials(event, 'password')}
                value={password}
            />

            
            {user && (
                <span>{user.name.first} {user.name.last}</span>
            )}

            <span className="text-field error-text">{error}</span>
            <button onClick={login}>Sign in</button>

        </div>
    )
}

export default LogInPage;