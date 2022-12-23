import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rocket from './Rocket';

const RocketsContainer = () => {
  const rockets = useSelector((state) => state.rockets);
  const { length } = rockets;
  const dispatch = useDispatch();
  useEffect(() => {
    if (length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);
  return (
    <div>
      {
      rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.flickr_images}
          id={rocket.id}
          reserved={rocket.reserved}
        />
      ))
    }
    </div>
  );
};

export default RocketsContainer;
