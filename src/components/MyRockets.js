import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExternalLink } from 'react-external-link';

import { changeRocketStatus } from '../redux/rockets/rocketsSlice';
import './MyRockets.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);

  const dispatch = useDispatch();

  const reservedRockets = activeRockets.map((rocket) => (
    <li key={rocket.id} className="reservedRockets-item">
      <p>{rocket.name}</p>
      <ExternalLink href={rocket.wikipedia}>
        <span>Read more</span>
      </ExternalLink>
      <button
        type="button"
        style={{ height: 30 }}
        onClick={() => { dispatch(changeRocketStatus(rocket.id)); }}
      >
        Cancel Reservation
      </button>
    </li>
  ));

  return (
    <ul className="reservedRockets-container">
      {reservedRockets.length > 0 ? reservedRockets : 'No reserved rockets'}
    </ul>
  );
};

export default MyRockets;
