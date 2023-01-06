import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionSlice, { fetchMissions } from '../redux/missions/missions';

describe('missionSlice', () => {
  it('should handle the fetchMissions.fulfilled action', () => {
    // Define the initial state and the payload of the action
    const initialState = { missions: [] };
    const payload = [{ mission_id: 48, mission_name: 'Elom', description: 'this is a test' }];

    // Dispatch the action
    const state = missionSlice.reducer(initialState, {
      type: fetchMissions.fulfilled.type,
      payload,
    });

    // Assert that the state was correctly updated
    expect(state.missions).toEqual([{ ...payload[0], reserved: false }]);
  });
});

describe('fetchMissions', () => {
  it('should dispatch the fetchMissions.fulfilled action on success', async () => {
    // Create a mock store with the thunk middleware
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});

    // Define the mock response of the fetch function
    const response = {
      ok: true,
      json: () => Promise.resolve([{ mission_id: '1', reserved: false }]),
    };
    // Set up the mock implementation of the fetch function
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    // Dispatch the thunk
    await store.dispatch(fetchMissions());

    // Assert that the store correctly dispatched the fulfilled action
    expect(store.getActions()).toEqual([
      { type: fetchMissions.pending.type, meta: { requestId: expect.any(String), requestStatus: 'pending' } },
      { type: fetchMissions.fulfilled.type, meta: { requestId: expect.any(String), requestStatus: 'fulfilled' }, payload: [{ mission_id: '1', reserved: false }] },
    ]);
  });
});
