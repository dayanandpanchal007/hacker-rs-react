import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import http from '../../api/http';

const Register = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [education, setEducation] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await http.post('/user/register', { firstname, lastname, email, location, education, password });
      setSuccess(true);
    } catch {
      setSuccess(false);
    }
  }

  return (
    <div className='card bg-dark w-50 mx-auto mt-5'>
      <div className='card-header'>
        <h2>Register | Hacker Net</h2>
      </div>
      <div className='card-body'>
      { success ? <div className='alert alert-success'>
          Registration success!
        </div> : null}
        <form onSubmit={handleSubmit}>

          <div className='form-group'>
            <label className='text-label' htmlFor='firstname'>Firstname</label>
            <input
              type='text'
              className='form-control'
              id='firstname'
              placeholder='Firstname'
              value={firstname}
              onChange={e => setFirstname(e.currentTarget.value)}
            />
          </div>

          <div className='form-group'>
            <label className='text-label' htmlFor='lastname'>Lastname</label>
            <input
              type='text'
              className='form-control'
              id='lastname'
              placeholder='Lastname'
              value={lastname}
              onChange={e => setLastname(e.currentTarget.value)}
            />
          </div>

          <div className='form-group'>
            <label className='text-label' htmlFor='email'>Email</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </div>

          <div className='form-group'>
            <label className='text-label' htmlFor='email'>Location</label>
            <input
              type='text'
              className='form-control'
              id='location'
              placeholder='Location'
              value={location}
              onChange={e => setLocation(e.currentTarget.value)}
            />
          </div>

          <div className='form-group'>
            <label className='text-label' htmlFor='email'>Education</label>
            <input
              type='text'
              className='form-control'
              id='education'
              placeholder='Education'
              value={education}
              onChange={e => setEducation(e.currentTarget.value)}
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
            />
          </div>

          <button className='btn btn-dark btn-block' type='submit'>Register</button>
          <div className='mt-3 text-center'>Already have an account <Link className='text-link' to='/login'>Login Here</Link></div>
        </form>
      </div>
    </div>
  );
}
 
export default Register;
