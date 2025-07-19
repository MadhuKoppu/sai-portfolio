// redux/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from './Slices/projectSlice'; // Example slice

const rootReducer = combineReducers({
  projects: projectReducer, // Now safely include projectReducer
  // Add other slices here as you create them
});

export default rootReducer;