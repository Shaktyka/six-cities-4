import NameSpace from '../name-space.js';
import {createSelector} from 'reselect';
import {getActiveCity} from '../app/selectors.js';

const NAME_SPACE = NameSpace.DATA;

// Данные
export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

// Получаем офферы, отфильтрованные по активному городу
export const getCityOffers = createSelector(
  getActiveCity,
  getOffers,
  (city, offers) => {
    return offers.filter((offer) => offer.city.name === city);
  }
);

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};

export const getOfferReviews = (state) => {
  return state[NAME_SPACE].offerReviews;
};

export const getNearby = (state) => {
  return state[NAME_SPACE].nearby;
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

export const getIsNearbyLoading = (state) => {
  return state[NAME_SPACE].isNearbyLoading;
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

export const getLoadNearbyError = (state) => {
  return state[NAME_SPACE].loadNearbyError;
};

export const getLoadReviewPostingError = (state) => {
  return state[NAME_SPACE].loadReviewPostingError;
};
