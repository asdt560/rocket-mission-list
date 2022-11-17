import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
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
    <section className="missionsSection">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="empty">Empty</th>
          </tr>
        </thead>
        {missions.map((mission) => (
          <tbody
            key={mission.mission_id}
          >
            <tr>
              <th className="missionname">
                {mission.mission_name}
              </th>
              <th className="missiondescription">
                <p>
                  {mission.description}
                </p>
              </th>
              <th className="missionstatus">
                {mission.reserved
                  ? <Badge bg="primary">Active Member</Badge>
                  : <Badge bg="secondary">NOT A MEMBER</Badge>}
              </th>
              <th className="missionreserve">
                <Button
                  variant={mission.reserved ? 'outline-danger' : 'outline-dark'}
                  type="button"
                  onClick={() => { handleClick(mission.mission_id); }}
                >
                  {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                </Button>
              </th>
            </tr>
          </tbody>
        ))}
      </Table>
    </section>
  );
};

export default Missions;
