// import { createSlice } from "@reduxjs/toolkit";

// const Jobslice=createSlice({
//   name:"jobs",
//   initialState:{
//     joblist:[],
//   },
//   reducers:{

//     addjob:(state,action)=>{

//            state.joblist.push(action.payload);
//     },
//   },
// });


// export const jobactioins=Jobslice.actions;
// export default Jobslice;


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

    // ✅ NEW: Update Job
    updatejob: (state, action) => {
      const { index, updatedData } = action.payload;

      state.joblist[index] = updatedData;
    },
  },
});

export const jobactioins = Jobslice.actions;
export default Jobslice;