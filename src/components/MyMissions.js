import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExternalLink } from 'react-external-link';
import Button from 'react-bootstrap/Button';
import { changeMissionStatus } from '../redux/missions/missionsslice';

const MyMissions = () => {
  const missions = useSelector((state) => state.missionsreducer.missions);
  const activemissions = missions.filter((mission) => mission.reserved === true);
  const dispatch = useDispatch();
  const reservedmissions = activemissions.map((mission) => (
    <li key={mission.mission_id} className="profilesquare">
      <div>
        <p>{mission.mission_name}</p>
        <Button
          size="sm"
          onClick={() => { dispatch(changeMissionStatus(mission.mission_id)); }}
        >
          Leave Mission
        </Button>
      </div>
      <ExternalLink className="link" href={mission.wikipedia}>
        <span>Read more</span>
      </ExternalLink>
    </li>
  ));

  return (
    <ul>
      {reservedmissions.length > 0 ? reservedmissions : 'No missions joined'}
    </ul>
  );
};

export default MyMissions;
