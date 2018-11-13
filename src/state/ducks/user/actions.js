import types from './types';

export const loginUser = () => ({
  type: types.LOGIN_USER,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

export default {
  loginUser,
  logoutUser,
};
