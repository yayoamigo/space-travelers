import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();
  const reserveRocket = () => {
    dispatch(bookRocket(id));
  };
  return (
    <div className="rocket-container">
      <img className="rocket-image" alt="rocket" src={image} />
      <div className="rocket-details">
        <h2 className="rocket-title">{name}</h2>
        <p className="rocket-description">
          {reserved && (
          <span className="rocket-badge">
            Reserved
          </span>
          )}
          {' '}
          {description}
        </p>
        {!reserved ? (
          <button type="button" className="rocket-reserve-btn" onClick={reserveRocket} data-testid="button-up">Reserve Rocket</button>
        ) : (
          <button type="button" className="rocket-cancel-btn" onClick={reserveRocket} data-testid="button-cancel">Cancel Reserve</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
