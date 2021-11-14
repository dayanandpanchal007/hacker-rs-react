import React, { useEffect, useState } from 'react';
import { HeaderNavbar, Profile, Spinner } from '..';

import http from '../../api/http';
import storage from '../../api/storage';

const ShowProfile = ({ match }) => {

  const headers = {
    'x-auth-token': storage.getHackToken()
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!match) return;
    const email = match.params['email'];

    const getUser = async () => {
      const { data } = await http.get(`/user/byEmail/${email}`, { headers });
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
 
export default ShowProfile;
