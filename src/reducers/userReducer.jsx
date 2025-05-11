// // reducers/userReducer.js
// const initialState = {
//   user: null,
// };

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.payload,
//       };
//     default:
//       return state;
//   }
// };


// export default userReducer;
// userSlice.js (Redux slice)
import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("raj",action);
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
 
});


export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

