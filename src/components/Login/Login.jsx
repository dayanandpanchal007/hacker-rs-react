import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import auth from '../../api/auth';
import http from '../../api/http';
import storage from '../../api/storage';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ loginError, setLoginError ] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(auth.isAuthenticated());
  }, [email, password]);
  
  const handleSubmit = e => {
    e.preventDefault();

    auth.login(async () => {
      try {
        const { data } = await http.post('/user/login', { email, password });
        setLoginError(false);
        storage.setHackToken(data.token);
        window.location.href = '/home';
      } catch {
        setLoginError(true);
      }
    })
  }

  if (authenticated) return <Redirect to='/home' />

  return (
    <div className='card bg-dark w-50 mx-auto mt-5'>
      <div className='card-header'>
        <h2>Login | Hacker Net</h2>
      </div>
      <div className='card-body'>
      { loginError ? <div className='alert alert-danger'>
          Invalid Credentials! Please try again.
        </div> : null}
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='text-label' htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
              onFocus={() => setLoginError(false)}
            />
          </div>

          <div className='form-group'>
            <label className='text-label' htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.currentTarget.value)}
              onFocus={() => setLoginError(false)}
            />
          </div>

          <button className='btn btn-dark btn-block' type='submit'>Login</button>

          <div className='mt-3 text-center'>Don't have an account <Link className='text-link' to='/register'>Register Here</Link></div>
        </form>
      </div>
    </div>
  );
}
 
export default Login;
