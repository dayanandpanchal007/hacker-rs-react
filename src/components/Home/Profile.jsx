import React from 'react';

import imgSrc from '../../images/hacker_dp.jpeg';

const Profile = ({ user }) => {
  return (
    <>
      <div
          style={{borderBottom: '1px solid'}}
          className='d-flex align-items-center'>
          <div className='w-25'>
            <img className='w-100' style={{borderTopLeftRadius: '4px'}} src={imgSrc} alt='Hacker default pic' />
          </div>
          <div className='w-75 text-center'>
            <h2>{user.firstname} {user.lastname}</h2>
            <p className='mb-0'>Overall Rank: {user.overallRank}</p>
            <p className='mb-0'>Followers: {user.followers}</p>
            <p className='mb-0'>Following: {user.following}</p>
          </div>
        </div>

        <div>
          <table className='table mt-4 w-75 mx-auto'>
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Metrics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Education</th>
                <td>{user.education}</td>
              </tr>

              <tr>
                <th>Location</th>
                <td>{user.location}</td>
              </tr>

              <tr>
                <th>Challenges Solved</th>
                <td>{user.challengesSolved}</td>
              </tr>

              <tr>
                <th>Solutions Submitted</th>
                <td>{user.solutionsSubmitted}</td>
              </tr>

              <tr>
                <th>Solutions Accepted</th>
                <td>{user.solutionsAccepted}</td>
              </tr>

              <tr>
                <th>No. Of Votes</th>
                <td>{user.noOfVotes}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
}
 
export default Profile;
