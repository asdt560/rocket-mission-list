import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExternalLink } from 'react-external-link';
import Button from 'react-bootstrap/Button';
import { changeRocketStatus } from '../redux/rockets/rocketsSlice';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);

  const dispatch = useDispatch();

  const reservedRockets = activeRockets.map((rocket) => (
    <li key={rocket.id} className="profilesquare">
      <span className="profilespan">{rocket.name}</span>
      <ExternalLink className="link" href={rocket.wikipedia}>
        <span className="profilespan">Read more</span>
      </ExternalLink>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => { dispatch(changeRocketStatus(rocket.id)); }}
      >
        Cancel Reservation
      </Button>
    </li>
  ));

  return (
    <ul className="reservedRockets-container">
      {reservedRockets.length > 0 ? reservedRockets : 'No reserved rockets'}
    </ul>
  );
};

export default MyRockets;
