/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getMissionData = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  console.log(data);
  return data;
};

const getMissions = createAsyncThunk('missions/GetMissions', async () => {
  const missiondata = await getMissionData().then((data) => data);
  console.log(missiondata);
  const missions = [];
  missiondata.forEach((mission) => {
    const object = {
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    };
    missions.push(object);
  });
  console.log(missions);
  return missions;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    missions: [],
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMissions.fulfilled, (state, action) => {
      state.loading = false;
      state.missions = action.payload;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    });
  },
});

export default missionsSlice.reducer;
export { getMissions };
