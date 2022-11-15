import React from 'react';
import PropTypes from 'prop-types';

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
    <li id={id}>
      <img src={images[0]} alt={name} style={{ height: 100, width: 100 }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Rocket;
