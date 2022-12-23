import React from 'react';
import { useSelector } from 'react-redux';

const RocketsProfile = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="reserve-container">
      <h1 className="profile-rockets-title">My Rockets</h1>
      <div className="profile-rockets">
        {reservedRockets.length === 0 && <p className="no-reserve">No Rockets Reserved</p>}
        {reservedRockets.map((rocket) => (
          <div key={rocket.id} className="reserve-item">{rocket.rocket_name}</div>
        ))}
      </div>
    </div>
  );
};

export default RocketsProfile;
