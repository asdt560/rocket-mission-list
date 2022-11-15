import React from 'react';
import { useSelector } from 'react-redux';

import './MyRockets.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
  const reservedRockets = activeRockets.map((rocket) => (
    <li key={rocket.id}>
      {rocket.name}
    </li>
  ));

  return (
    <ul className="reservedRockets-container">
      {reservedRockets}
    </ul>
  );
};

export default MyRockets;
