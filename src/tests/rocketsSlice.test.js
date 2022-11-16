import store from '../redux/configureStore';
import { changeRocketStatus, getRockets } from '../redux/rockets/rocketsSlice';

beforeEach(() => {
  fetch.resetMocks();
});

describe('redux state tests', () => {
  it('Should initially set state to initial state', () => {
    const state = store.getState().rocketsReducer;
    expect(state).toEqual({
      loading: false,
      rockets: [],
      error: '',
    });
  });
  it('get rockets', async () => {
    const response = [{
      id: '1',
      rocket_name: 'one',
      description: 'placeholder',
      flickr_images: 'not-an-image',
      wikipedia: 'wiki',
    }];
    fetch.mockResponseOnce(JSON.stringify(response));
    const fetcher = await store.dispatch(getRockets());
    const result = fetcher.payload;
    const expected = [{
      id: '1',
      name: 'one',
      description: 'placeholder',
      flickr_images: 'not-an-image',
      wikipedia: 'wiki',
      reserved: false,
    }];
    expect(result).toEqual(expected);
  });
  it('change rocket status to true', () => {
    const target = store.getState().rocketsReducer.rockets[0].reserved;
    store.dispatch(changeRocketStatus('1'));
    expect(!target).toEqual(store.getState().rocketsReducer.rockets[0].reserved);
  });
  it('change back to false', () => {
    const target = store.getState().rocketsReducer.rockets[0].reserved;
    store.dispatch(changeRocketStatus('1'));
    expect(store.getState().rocketsReducer.rockets[0].reserved).toEqual(!target);
  });
});
