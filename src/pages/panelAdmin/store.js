import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./organization/type/postsSlice";
import organizationSlice from "./organization/organizationTabel/organizationSlice";
// import complementTypeSlice from "./organization/complementType/complementTypeSlice";
import complementValueSlice from "./organization/complementValue/complementValueSlice";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    posts: postSlice,
    postsOrganization: organizationSlice,
    // postsComplementType: complementTypeSlice,
    postsComplementValue: complementValueSlice,
  },
});

export default store;
