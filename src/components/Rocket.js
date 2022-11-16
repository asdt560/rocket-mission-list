import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Badge, Button, Row, Col, Image,
} from 'react-bootstrap';

import { changeRocketStatus } from '../redux/rockets/rocketsSlice';

const Rocket = (props) => {
  const {
    id, name, description, images, reserved,
  } = props;

  Rocket.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    reserved: PropTypes.bool.isRequired,
  };

  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    dispatch(changeRocketStatus(id));
  };

  return (
    <Row id={id} className="mb-4">
      <Col xs={3}>
        <Image src={images[0]} alt={name} fluid />
      </Col>
      <Col xs={9} className="text-start">
        <h3>{name}</h3>
        <p>
          {reserved && <Badge bg="info" className="me-2">Reserved</Badge>}
          {description}
        </p>
        <Button type="button" onClick={handleChangeStatus}>{ reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
      </Col>
    </Row>
  );
};

export default Rocket;
