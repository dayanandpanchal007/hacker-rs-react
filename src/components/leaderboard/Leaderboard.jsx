import React, { useEffect, useState } from 'react';
import { Grid, HeaderNavbar, Spinner } from '..';

import http from '../../api/http';
import storage from '../../api/storage';

const Leaderboard = ({ history }) => {

  const headers = {
    'x-auth-token': storage.getHackToken()
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [columns] = useState([
    { id: '1', title: 'Name', content: dataItem => {
      return `${dataItem.firstname} ${dataItem.lastname}`
    } },
    { id: '2', title: 'Rank', field: 'overallRank' },
    { id: '3', title: 'Challenges Solved', field: 'challengesSolved' },
    { id: '4', title: 'Solutions Submitted', field: 'solutionsSubmitted' },
    { id: '5', title: 'Solutions Accepted', field: 'solutionsAccepted' }
  ]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await http.get('/user/allUsers', { headers });
      setLoading(false);
      setUsers(data);
    }
    
    getAllUsers();

    // eslint-disable-next-line
  }, []);

  const onRowClick = user => {
    return history.push(`/showprofile/${user.email}`);
  }

  return (
    <>
    {loading && <Spinner />}
    <HeaderNavbar />
    <div className='container mt-3 px-0'>
      <h1 className='text-center mt-3'>Leaderboard</h1>
      <Grid 
        dataSource={users}
        columns={columns}
        clickable={true}
        onRowClick={onRowClick}
      />
      <br />
    </div>
  </>
  );
}
 
export default Leaderboard;
