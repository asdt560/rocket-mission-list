import React from 'react';
import MyRockets from '../components/MyRockets';
import MyMissions from '../components/MyMissions';

const MyProfile = () => (
  <div className="profilecontainer">
    <div className="profilediv">
      <h2 className="profiledivtitle">My Missions</h2>
      <MyMissions />
    </div>
    <div className="profilediv">
      <h2 className="profiledivtitle">My Rockets</h2>
      <MyRockets />
    </div>
  </div>
);

export default MyProfile;
