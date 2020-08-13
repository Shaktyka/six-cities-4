import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

export const getFulters = (state) => {
  return state[NAME_SPACE].filters;
};

export const getActiveFilter = (state) => {
  return state[NAME_SPACE].activeFilter;
};
