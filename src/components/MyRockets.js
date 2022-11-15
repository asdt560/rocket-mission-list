import React from 'react';
import { useSelector } from 'react-redux';
import { ExternalLink } from 'react-external-link';

import './MyRockets.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedRockets = activeRockets.map((rocket) => (
    <li key={rocket.id} className="reservedRockets-item">
      <p>{rocket.name}</p>
      <ExternalLink href={rocket.wikipedia}>
        <span>Read more</span>
      </ExternalLink>
    </li>
  ));

  return (
    <ul className="reservedRockets-container">
      {reservedRockets.length > 0 ? reservedRockets : 'No reserved rockets'}
    </ul>
  );
};

export default MyRockets;
