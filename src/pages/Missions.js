import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsslice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.reducer.missions);
  if (missions.length === 0) {
    setTimeout(() => {
      dispatch(getMissions());
    }, '1000');
  }
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
            <th>Status</th>
            <th>Empty</th>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Missions;
