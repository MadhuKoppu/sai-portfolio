// redux/slices/projectSlice.ts (Example)
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project } from '../../pages/projects'; // Import Project interface

// Define the shape of the slice's state
interface ProjectsState {
  items: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  items: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    fetchProjectsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProjectsSuccess: (state, action: PayloadAction<Project[]>) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchProjectsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure } = projectSlice.actions;
export default projectSlice.reducer;