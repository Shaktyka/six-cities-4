import {extend} from '../../utils.js';
import {AuthStatus} from '../../consts.js';
import {getAdaptedUserData} from '../../adapter/adapter.js';

export const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  isAuthProgress: true,
  authError: ``,
  userData: {
    avatarUrl: ``,
    email: ``,
    id: 0,
    isPro: false,
    name: ``
  },
};

export const ActionType = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  FINISH_AUTH_PROGRESS: `FINISH_AUTH_PROGRESS`,
  SET_AUTH_ERROR: `SET_AUTH_ERROR`,
  SET_USER_DATA: `SET_USER_DATA`,
};

export const ActionCreator = {
  setAuthStatus: (status) => {
    return {
      type: ActionType.SET_AUTH_STATUS,
      payload: status
    };
  },

  finishAuthProgress: () => {
    return {
      type: ActionType.FINISH_AUTH_PROGRESS,
      payload: false,
    };
  },

  setAuthError: (text) => {
    return {
      type: ActionType.SET_AUTH_ERROR,
      payload: text
    };
  },

  setUserData: (userData) => {
    return {
      type: ActionType.SET_USER_DATA,
      payload: userData
    };
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload
      });

    case ActionType.FINISH_AUTH_PROGRESS:
      return extend(state, {
        isAuthProgress: action.payload
      });

    case ActionType.SET_AUTH_ERROR:
      return extend(state, {
        authError: action.payload
      });

    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
  }

  return state;
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((result) => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(result.data)));
        dispatch(ActionCreator.finishAuthProgress());
      })
      .catch((error) => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
        dispatch(ActionCreator.finishAuthProgress());
        dispatch(ActionCreator.setAuthError(error.message));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((result) => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        dispatch(ActionCreator.setUserData(getAdaptedUserData(result.data)));
        dispatch(ActionCreator.setAuthError(``));
      })
      .catch((error) => {
        dispatch(ActionCreator.setAuthError(error.message));
        dispatch(ActionCreator.setAuthError(``));
      });
  }
};
