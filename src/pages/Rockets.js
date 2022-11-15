import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRockets());
    }
  }, [dispatch, rockets]);

  const rocketList = rockets.map((rocket) => (
    <Rocket
      key={rocket.id}
      id={rocket.id}
      name={rocket.name}
      description={rocket.description}
      images={rocket.images}
      reserved={rocket.reserved}
    />
  ));

  return (
    <ul className="rockets-container">
      {rocketList}
    </ul>
  );
};

export default Rockets;
