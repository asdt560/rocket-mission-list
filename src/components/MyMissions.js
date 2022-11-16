import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExternalLink } from 'react-external-link';
import Button from 'react-bootstrap/Button';
import { changeMissionStatus } from '../redux/missions/missionsSlice';

const MyMissions = () => {
  const missions = useSelector((state) => state.missionsReducer.missions);
  const activemissions = missions.filter((mission) => mission.reserved === true);
  const dispatch = useDispatch();
  const reservedmissions = activemissions.map((mission) => (
    <li key={mission.mission_id} className="profilesquare">
      <span className="profilespan">{mission.mission_name}</span>
      <ExternalLink className="link" href={mission.wikipedia}>
        <span className="profilespan">Read more</span>
      </ExternalLink>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => { dispatch(changeMissionStatus(mission.mission_id)); }}
      >
        Leave Mission
      </Button>
    </li>
  ));

  return (
    <ul className="reservedRockets-container">
      {reservedmissions.length > 0 ? reservedmissions : 'No missions joined'}
    </ul>
  );
};

export default MyMissions;
