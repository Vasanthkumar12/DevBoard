import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export const Login = () => {
    const {login} = useContext(AuthContext)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Welcome to DevBoard</h2>
      <button onClick={login}>Login</button>
    </div>
  )
}
