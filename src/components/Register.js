import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = ({ setToken, navigate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Password Don't Match")
      return null
    }
    const results = await registerUser(username, password);
    if (results.token) {
      setToken(results.token)
      window.localStorage.setItem('token', results.token)
      navigate('/')
    } else {
      console.log('error during handlSubmit Register')
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <input style={{ margin: '.25rem', width: '100%', backgroundColor: 'lightGrey' }}
        type='text'
        label='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
      />
        <input style={{ margin: '.25rem', width: '100%', backgroundColor: 'lightGrey' }}
          type='password'
          label='Enter Password*'
          onChange={(event) => setPassword(event.target.value)} />
        <input style={{ margin: '.25rem', width: '100%', backgroundColor: 'lightGrey' }}
          type='password'
          label='Confirm Password'
          onChange={(event) => setConfirmPassword(event.target.value)} />
        <button style={{ height: '3rem', margin: '.25rem', backgroundColor:'#24a6d1' }} variant='contained' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Register;