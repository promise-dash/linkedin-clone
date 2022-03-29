import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  email: "",
  photo: "",
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state, action) => {
      state.name= action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.profilePic;
    },
    logout: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },

});

export const { login, logout } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;
