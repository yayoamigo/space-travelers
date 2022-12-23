import React, { useEffect } from 'react';
import {
  Table, Container,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import Mission from './Misson';

const MissionsContainer = () => {
  const missionObj = useSelector((state) => state.missions.missions);
  const { length } = missionObj;
  const dispatch = useDispatch();
  useEffect(() => {
    if (length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch]);

  return (
    <Container fluid className="table-responsive-sm">
      <Table className="my-3 table-bordered table-striped">
        <thead>
          <tr>
            <td><b>Mission</b></td>
            <td><b>Description</b></td>
            <td><b>Status</b></td>
            <td />
          </tr>
        </thead>
        <tbody>
          {missionObj.map((m) => (
            <Mission
              key={m.mission_id}
              missionId={m.mission_id}
              missionName={m.mission_name}
              description={m.description}
              reserved={m.reserved}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MissionsContainer;
