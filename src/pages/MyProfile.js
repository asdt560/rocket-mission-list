import React from 'react';
import { useSelector } from 'react-redux';
import MyRockets from '../components/MyRockets';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsreducer.missions);
  const activemissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div className="profilecontainer">
      <div className="profilediv">
        <h2 className="profiledivtitle">My Missions</h2>
        {activemissions.map((mission) => (
          <div
            key={mission.mission_id}
            className="profilesquare"
          >
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div className="profilediv">
        <h2 className="profiledivtitle">My Rockets</h2>
        <MyRockets />
      </div>
    </div>
  );
};

export default MyProfile;
