import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missions';
import rocketsReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionSlice.reducer,
    rockets: rocketsReducer,
  },
});

export default store;
