import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

// Данные
export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};

export const getOfferReviews = (state) => {
  return state[NAME_SPACE].offerReviews;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

// Процесс загрузки
export const getIsOffersLoading = (state) => {
  return state[NAME_SPACE].isOffersLoading;
};

export const getIsFavoritesLoading = (state) => {
  return state[NAME_SPACE].isFavoritesLoading;
};

export const getIsOfferReviewsLoading = (state) => {
  return state[NAME_SPACE].isOfferReviewsLoading;
};

export const getIsReviewPosting = (state) => {
  return state[NAME_SPACE].isReviewPosting;
};

// Ошибки
export const getLoadOffersError = (state) => {
  return state[NAME_SPACE].loadOffersError;
};

export const getLoadFavoritesError = (state) => {
  return state[NAME_SPACE].loadFavoritesError;
};

export const getLoadOfferReviewsError = (state) => {
  return state[NAME_SPACE].loadOfferReviewsError;
};

export const getLoadReviewPostingError = (state) => {
  return state[NAME_SPACE].loadReviewPostingError;
};
