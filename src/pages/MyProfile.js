import React from 'react';
import { useSelector } from 'react-redux';
import MyRockets from '../components/MyRockets';

const MyProfile = () => {
  const missions = useSelector((state) => state.missionsreducer.missions);
  const activemissions = missions.filter((mission) => mission.joined === true);
  return (
    <div>
      <div>
        <h2>My Missions</h2>
        {activemissions.map((mission) => (
          <div key={mission.mission_id}>
            {mission.mission_name}
          </div>
        ))}
      </div>
      <div>
        <h2>My Rockets</h2>
        <MyRockets />
      </div>
    </div>
  );
};

export default MyProfile;
