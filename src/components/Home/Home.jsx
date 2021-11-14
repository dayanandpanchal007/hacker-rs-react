import React, { useEffect, useState } from 'react';
import { HeaderNavbar, Profile, Spinner } from '..';

import http from '../../api/http';
import storage from '../../api/storage';

const Home = () => {

  const headers = {
    'x-auth-token': storage.getHackToken()
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await http.get('/user', { headers });
      setLoading(false);
      setUser(data);
    }

    getUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
    {loading && <Spinner />}
    <HeaderNavbar />
    <div className='container mt-3 px-0'>
      {user && <Profile user={user} />}
    </div>
  </>
  );
}
 
export default Home;
