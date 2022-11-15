import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { changeRocketStatus } from '../redux/rockets/rocketsSlice';
import './Rocket.css';

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
    <li id={id} className="rocket-container">
      <img src={images[0]} alt={name} style={{ height: 200 }} />
      <div className="rocket-info">
        <h3>{name}</h3>
        <div className="rocket-description">
          <p>
            <span style={{ backgroundColor: 'blue' }}>{ reserved && 'Reserved' }</span>
            {description}
          </p>
        </div>
        <button type="button" onClick={handleChangeStatus}>{ reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </li>
  );
};

export default Rocket;
