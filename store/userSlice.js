import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  usersArray: [
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
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.usersArray.push(action.payload);
      // console.log(state);
    },
    authentication: (state, action) => {
      // console.log('Login payload', action.payload);
      state.isAuth = action.payload;
      console.log(state.isAuth, 'login');
    },
  },
});

// Action creators are generated for each case reducer function
export const {addUsers, authentication} = userSlice.actions;

export default userSlice.reducer;

export const fetchUserById = createAsyncThunk(
  'users/fetchById',
  async (userId, thunkAPI) => {
    const response = await fetch(`https://reqres.in/api/users/`);
    const data = await response.json();
    const Users = thunkAPI.dispatch(addUsers(data));
    // console.log(Users.payload);
  },
);
