import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getRockets = createAsyncThunk('rockets/GetRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
    reserved: false,
  }));
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    loading: false,
    rockets: [],
    error: '',
  },
  reducers: {
    changeRocketStatus(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return {
        ...state,
        rockets: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getRockets.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rockets: action.payload,
    }));
    builder.addCase(getRockets.rejected, (state, action) => ({
      ...state,
      loading: false,
      rockets: [],
      error: action.error.message,
    }));
  },
});

export default rocketsSlice.reducer;
export const { changeRocketStatus } = rocketsSlice.actions;
export { getRockets };
