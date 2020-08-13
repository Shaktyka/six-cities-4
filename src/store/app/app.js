import {extend} from '../../utils.js';

export const initialState = {
  activeCity: ``,
};

export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
};

export const ActionCreator = {
  setActiveCity: (city) => {
    return {
      type: ActionType.SET_ACTIVE_CITY,
      payload: city
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });
  }

  return state;
};

// Operation
