import fetchMock from 'jest-fetch-mock';
import store from '../redux/configureStore';
import { changeMissionStatus, getMissions } from '../redux/missions/missionsslice';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('redux state tests', () => {
  it('Should initially set state to initial state', () => {
    const state = store.getState().missionsReducer;
    expect(state).toEqual({
      loading: false,
      missions: [],
      error: '',
    });
  });
  it('get missions', async () => {
    const response = [{
      mission_id: '1',
      mission_name: 'one',
      description: 'placeholder',
      wikipedia: 'mission.wikipedia',
    }];
    fetch.mockResponseOnce(JSON.stringify(response));
    const fetcher = await store.dispatch(getMissions());
    const result = fetcher.payload;
    const expected = [{
      mission_id: '1',
      mission_name: 'one',
      description: 'placeholder',
      wikipedia: 'mission.wikipedia',
      reserved: false,
    }];
    expect(result).toEqual(expected);
  });
  it('change mission status to true', () => {
    const target = store.getState().missionsReducer.missions[0].reserved;
    store.dispatch(changeMissionStatus('1'));
    expect(!target).toEqual(store.getState().missionsReducer.missions[0].reserved);
  });
  it('change back to false', () => {
    const target = store.getState().missionsReducer.missions[0].reserved;
    store.dispatch(changeMissionStatus('1'));
    expect(store.getState().missionsReducer.missions[0].reserved).toEqual(!target);
  });
});
