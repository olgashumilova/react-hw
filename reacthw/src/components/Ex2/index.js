import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SignInPageContainer = () => {

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  
  useEffect(() => {
    console.log('Mount');
  
    return () => console.log('Unmount');
  })
  
  const onLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/auth/sign-in', {
        phone: phone,
        password: password
      });
      setUser({...response.data});
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }
  
  const onChangePhone = (phoneNumber) => setPhone(phoneNumber);
  const onChangePassword = (pass) => setPassword(pass);
  
  return (
    <div className="page">

      <div className="page-sign-in">

        <input
          type="text"
          placeholder="phone number"
          onChange={(event) => onChangePhone(event.target.value)}
          value={phone}
        />

        <input
          type="text"
          placeholder="password"
          onChange={(event) => onChangePassword(event.target.value)}
          value={password}
        />

      <div>

        {Object.keys(user).length !== 0 && (
          <span>{user.name.first} {user.name.last}</span>
        )}

        </div>
          <span className="text-field error-text">{error}</span>
          <button onClick={onLogin}>Sign in</button>
        </div>
        
      </div>
  )
}
  
export default SignInPageContainer;