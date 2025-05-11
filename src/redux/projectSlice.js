// // src/redux/userSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     login(state, action) {
//       state.user = action.payload;
//     },
//     logout(state) {
//       state.user = null;
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
// store/projectSlice.js
import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "Project",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.unshift(action.payload); // prepend to list
    },
  },
});

export const { setProjects, addProject } = projectSlice.actions;
export default projectSlice.reducer;

