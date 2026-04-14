import { configureStore } from "@reduxjs/toolkit";
import Jobslice from "./Jobslice";

const jobstore=configureStore({

  reducer:{

    jobs:Jobslice.reducer
    
  }
});

export default jobstore;