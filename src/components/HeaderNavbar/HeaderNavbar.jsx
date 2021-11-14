import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import auth from '../../api/auth';
import storage from '../../api/storage';

const HeaderNavbar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = storage.getHackToken();
    const payload = token.split('.')[1];
    const u = JSON.parse(atob(payload));
    setUser(u);
  }, []);

  const handleLogout = () => {
    auth.logout(() => {
      window.location.href = 'login';
    });
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark nav-bg'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/home'>HACK NET</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        {
          auth.authenticated ? <>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/home'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/leaderboard'>Leaderboard</NavLink>
                </li>
              </ul>
            </div>
            <div className='d-flex'>
              {user?.firstname && <Link className='nav-link d-block mr-1' to='/home' >
                {user?.firstname} {user?.lastname}
              </Link>}
              <div
              style={{cursor: 'pointer'}}
              className='nav-link'
              onClick={handleLogout}
              title='Logout'
              >
                <i className="bi bi-box-arrow-right mr-1"></i>
                  Logout
              </div>
            </div>
          </> : null
        }
      </div>
    </nav>
  );
}
 
export default HeaderNavbar;
