import {extend} from '../../utils.js';
import {getAdaptedOffer, getAdaptedReview} from '../../adapter/adapter.js';

import {Endpoint} from '../../consts.js';

export const initialState = {
  offers: [],
  favorites: [],
  offerReviews: [],
  cities: [],
  isOffersLoading: false,
  isFavoritesLoading: false,
  isOfferReviewsLoading: false,
  isReviewPosting: false,
  loadOffersError: ``,
  loadFavoritesError: ``,
  loadOfferReviewsError: ``,
  loadReviewPostingError: ``
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_OFFER_REVIEWS: `LOAD_OFFER_REVIEWS`,
  SET_CITIES: `SET_CITIES`,
  SET_OFFERS_LOADING: `SET_OFFERS_LOADING`,
  SET_FAVORITES_LOADING: `SET_FAVORITES_LOADING`,
  SET_OFFER_REVIEWS_LOADING: `SET_OFFER_REVIEWS_LOADING`,
  SET_REVIEW_POSTING: `SET_REVIEW_POSTING`,
  SET_LOAD_OFFERS_ERROR: `SET_LOAD_OFFERS_ERROR`,
  SET_LOAD_FAVORITES_ERROR: `SET_LOAD_FAVORITES_ERROR`,
  SET_LOAD_OFFER_REVIEWS_ERROR: `SET_LOAD_OFFER_REVIEWS_ERROR`,
  SET_LOAD_REVIEW_POSTING_ERROR: `SET_LOAD_REVIEW_POSTING_ERROR`,
};

export const ActionCreator = {
  // Загрузки данных
  loadOffers: (offers) => {
    return ({
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
  },

  loadFavorites: (favorites) => {
    return ({
      type: ActionType.LOAD_FAVORITES,
      payload: favorites
    });
  },

  loadOfferReviews: (reviews) => {
    return ({
      type: ActionType.LOAD_OFFER_REVIEWS,
      payload: reviews
    });
  },

  // Определение списка городов
  setCities: (cities) => {
    return {
      type: ActionType.SET_CITIES,
      payload: cities
    };
  },

  // Установки флагов загрузки
  setOffersLoading: (isOffersLoading) => {
    return (
      {
        type: ActionType.SET_OFFERS_LOADING,
        payload: isOffersLoading
      }
    );
  },

  setFavoritesLoading: (isFavoritesLoading) => {
    return (
      {
        type: ActionType.SET_FAVORITES_LOADING,
        payload: isFavoritesLoading
      }
    );
  },

  setOfferReviewsLoading: (isOfferReviewsLoading) => {
    return (
      {
        type: ActionType.SET_OFFER_REVIEWS_LOADING,
        payload: isOfferReviewsLoading
      }
    );
  },

  setReviewPosting: (isReviewPosting) => {
    return (
      {
        type: ActionType.SET_REVIEW_POSTING,
        payload: isReviewPosting
      }
    );
  },

  // Установки ошибок
  setLoadOffersError: (message) => {
    return (
      {
        type: ActionType.SET_LOAD_OFFERS_ERROR,
        payload: message
      }
    );
  },

  setLoadFavoritesError: (message) => {
    return (
      {
        type: ActionType.SET_LOAD_FAVORITES_ERROR,
        payload: message
      }
    );
  },

  setLoadOfferReviewsError: (message) => {
    return (
      {
        type: ActionType.SET_LOAD_OFFER_REVIEWS_ERROR,
        payload: message
      }
    );
  },

  setLoadReviewPostingError: (message) => {
    return (
      {
        type: ActionType.SET_LOAD_REVIEW_POSTING_ERROR,
        payload: message
      }
    );
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    // Загрузки данных
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });

    case ActionType.LOAD_OFFER_REVIEWS:
      return extend(state, {
        offerReviews: action.payload
      });

    case ActionType.SET_CITIES:
      return extend(state, {
        cities: action.payload
      });

    case ActionType.SET_OFFERS_LOADING:
      return extend(state, {
        isOffersLoading: action.payload
      });

    case ActionType.SET_FAVORITES_LOADING:
      return extend(state, {
        isFavoritesLoading: action.payload
      });

    case ActionType.SET_OFFER_REVIEWS_LOADING:
      return extend(state, {
        isOfferReviewsLoading: action.payload
      });

    case ActionType.SET_REVIEW_POSTING:
      return extend(state, {
        isReviewPosting: action.payload
      });

    // Установка ошибок
    case ActionType.SET_LOAD_OFFERS_ERROR:
      return extend(state, {
        loadOffersError: action.payload
      });

    case ActionType.SET_LOAD_FAVORITES_ERROR:
      return extend(state, {
        loadFavoritesError: action.payload
      });

    case ActionType.SET_LOAD_OFFER_REVIEWS_ERROR:
      return extend(state, {
        loadOfferReviewsError: action.payload
      });

    case ActionType.SET_LOAD_REVIEW_POSTING_ERROR:
      return extend(state, {
        loadReviewPostingError: action.payload
      });
  }

  return state;
};

export const Operation = {

  /*
  loadOffers: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFilmsLoading(true));

    return api.get(Endpoint.FILMS)
      .then((result) => {
        const adaptedFilms = result.data.map((film) => getAdaptedFilm(film));

        dispatch(ActionCreator.loadFilms(adaptedFilms));
        const genresList = [
          DEFAULT_GENRE,
          ...new Set(adaptedFilms.map((filmObject) => filmObject.genre).slice(0, MAX_GENRES_LENGTH))
        ];
        dispatch(ActionCreator.loadGenres(genresList));
        dispatch(ActionCreator.setFilmsLoading(false));
      })
      .catch((error) => {
        dispatch(ActionCreator.setFilmsLoading(false));
        if (error.response.status !== 200) {
          dispatch(ActionCreator.setFilmsErrorMessage(`${error.response.status} ${error.response.data.error}`));
        } else {
          dispatch(ActionCreator.setFilmsErrorMessage(``));
        }
      });
  },
  */

};
