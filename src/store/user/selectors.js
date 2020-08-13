import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[NAME_SPACE].authStatus;
};

export const getAuthProgress = (state) => {
  return state[NAME_SPACE].isAuthProgress;
};

export const getAuthError = (state) => {
  return state[NAME_SPACE].authError;
};

export const getUserData = (state) => {
  return state[NAME_SPACE].userData;
};
