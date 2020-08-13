import {extend} from '../../utils.js';
import {FILTERS, ACTIVE_FILTER} from '../../consts.js';

export const initialState = {
  activeCity: ``,
  activeFilter: ACTIVE_FILTER,
  filters: FILTERS
};

export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_FILTER: `SET_ACTIVE_FILTER`,
};

export const ActionCreator = {
  setActiveCity: (city) => {
    return {
      type: ActionType.SET_ACTIVE_CITY,
      payload: city
    };
  },

  setActiveFilter: (filter) => {
    return {
      type: ActionType.SET_ACTIVE_FILTER,
      payload: filter
    };
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {
        activeCity: action.payload
      });

    case ActionType.SET_ACTIVE_FILTER:
      return extend(state, {
        activeFilter: action.payload
      });
  }

  return state;
};
