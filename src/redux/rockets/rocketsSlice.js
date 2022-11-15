/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getRockets = createAsyncThunk('rockets/GetRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const rockets = data.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    images: rocket.flickr_images,
  }));
  console.log(rockets);
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    loading: false,
    rockets: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getRockets.rejected, (state, action) => {
      state.loading = false;
      state.rockets = [];
      state.error = action.error.message;
    });
  },
});

export default rocketsSlice.reducer;
export { getRockets };
