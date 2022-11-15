import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getMissions = createAsyncThunk('missions/GetMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const missions = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    wikipedia: mission.wikipedia,
    reserved: false,
  }));
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
  reducers: {
    changeMissionStatus(state, action) {
      const newState = state.missions.map((mission) => {
        const previous = mission.reserved;
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: !previous,
        };
      });
      console.log(newState);
      return {
        ...state,
        missions: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(getMissions.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      missions: action.payload,
    }));
    builder.addCase(getMissions.rejected, (state, action) => ({
      ...state,
      loading: false,
      missions: [],
      error: action.error.message,
    }));
  },
});

export default missionsSlice.reducer;
export { getMissions };
export const { changeMissionStatus } = missionsSlice.actions;
