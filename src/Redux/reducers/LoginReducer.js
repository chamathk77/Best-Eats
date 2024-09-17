import { createSlice } from "@reduxjs/toolkit";

const CLASS_NAME = "LoginReducer";

const UserInitialState = {
  UserName: '',
};

export const LoginSlice = createSlice({
  name: 'Login',
  initialState: {
    LoginUser: UserInitialState,
  },
  reducers: {
    UpdateUserName: (state, action) => {
      state.LoginUser.UserName = action.payload;
      console.log(`${CLASS_NAME} Updating Reducer LoginUser UserName state:`, state.LoginUser.UserName);
    },
    ResetUserState: (state) => {
      state.LoginUser = UserInitialState;
      console.log(`${CLASS_NAME} Reset Reducer LoginUser state:`);
    },
  },
});

export const { UpdateUserName, ResetUserState } = LoginSlice.actions;
export default LoginSlice.reducer;
