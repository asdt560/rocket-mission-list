import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';

import Rocket from '../components/Rocket';
import { getRockets } from '../redux/rockets/rocketsSlice';

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
      images={rocket.flickr_images}
      reserved={rocket.reserved}
    />
  ));

  return (
    <Container className="m-3">
      {rocketList}
    </Container>
  );
};

export default Rockets;
