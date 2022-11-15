import React from 'react';
import PropTypes from 'prop-types';

import './Rocket.css';

const Rocket = (props) => {
  const {
    id, name, description, images,
  } = props;

  Rocket.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    <li id={id} className="rocket-container">
      <img src={images[0]} alt={name} style={{ height: 200 }} />
      <div className="rocket-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default Rocket;
