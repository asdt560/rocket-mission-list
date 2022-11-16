import store from '../redux/configureStore';
import { changeMissionStatus, getMissions } from '../redux/missions/missionsslice';

beforeEach(() => {
  fetch.resetMocks();
});

describe('redux state tests', () => {
  it('Should initially set state to initial state', () => {
    const state = store.getState().missionsreducer;
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
  it('change mission status', () => {
    const target = store.getState().missionsreducer.missions[0].reserved;
    store.dispatch(changeMissionStatus('1'));
    expect(!target).toEqual(store.getState().missionsreducer.missions[0].reserved);
  });
});
