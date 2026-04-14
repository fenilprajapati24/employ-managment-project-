


import { createSlice } from "@reduxjs/toolkit";

const Jobslice = createSlice({
  name: "jobs",
  initialState: {
    joblist: [],
  },
  reducers: {
    addjob: (state, action) => {
      state.joblist.push(action.payload);
    },

    
    updatejob: (state, action) => {
      const { index, updatedData } = action.payload;

      state.joblist[index] = updatedData;
    },
  },
});

export const jobactioins = Jobslice.actions;
export default Jobslice;
