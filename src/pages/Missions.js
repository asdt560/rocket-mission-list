import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, changeMissionStatus } from '../redux/missions/missionsslice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsreducer.missions);
  if (missions.length === 0) {
    dispatch(getMissions());
  }
  const handleClick = (mission) => {
    dispatch(changeMissionStatus(mission));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Empty</th>
        </tr>
      </thead>
      {missions.map((mission) => (
        <tbody
          key={mission.mission_id}
        >
          <tr>
            <th>
              {mission.mission_name}
            </th>
            <th>
              {mission.description}
            </th>
            <th>
              {mission.joined ? 'Active Member' : 'NOT A MEMBER'}
            </th>
            <th>
              <button
                type="button"
                onClick={() => { handleClick(mission.mission_id); }}
              >
                {mission.joined ? 'Leave Mission' : 'Join Mission'}
              </button>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
