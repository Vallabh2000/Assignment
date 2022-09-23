import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: [
    {
      confirmPassword: 'vallabh@123',
      date: '02-09-2022',
      email: 'vallabh@gmail.com',
      firstName: 'Vallabh',
      gender: 'Male',
      lastName: 'Ingle',
      password: 'vallabh@123',
      phoneNumber: '9087654321',
    },
    {
      confirmPassword: 'siddesh@123',
      date: '23-09-2022',
      email: 'siddesh@gmail.com',
      firstName: 'Siddesh',
      gender: 'Male',
      lastName: 'Govalkar',
      password: 'siddesh@123',
      phoneNumber: '9807654321',
    },
  ],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
      //   console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUsers} = userSlice.actions;

export default userSlice.reducer;
