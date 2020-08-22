import {extend} from '../../utils.js';
import {getAdaptedOffer, getAdaptedReview} from '../../adapter/adapter.js';
import {MAX_CITIES_AMOUNT, Endpoint} from '../../consts.js';

import {ActionCreator as AppActionCreator} from '../app/app.js';

export const initialState = {
  offers: [], // предложения
  favorites: [], // избранные
  offerReviews: [], // список ревью
  nearby: [], // предложения поблизости
  cities: [], // список городов
  isOffersLoading: false,
  isFavoritesLoading: false,
  isOfferReviewsLoading: false,
  isNearbyLoading: false,
  isReviewPosting: false,
  loadOffersError: ``,
  loadFavoritesError: ``,
  loadOfferReviewsError: ``,
  loadNearbyError: ``,
  loadReviewPostingError: ``,
};

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_OFFER_REVIEWS: `LOAD_OFFER_REVIEWS`,
  LOAD_NEARBY: `LOAD_NEARBY`,
  SET_CITIES: `SET_CITIES`,
  SET_OFFERS_LOADING: `SET_OFFERS_LOADING`,
  SET_FAVORITES_LOADING: `SET_FAVORITES_LOADING`,
  SET_OFFER_REVIEWS_LOADING: `SET_OFFER_REVIEWS_LOADING`,
  SET_NEARBY_LOADING: `SET_NEARBY_LOADING`,
  SET_REVIEW_POSTING: `SET_REVIEW_POSTING`,
  SET_LOAD_OFFERS_ERROR: `SET_LOAD_OFFERS_ERROR`,
  SET_LOAD_FAVORITES_ERROR: `SET_LOAD_FAVORITES_ERROR`,
  SET_LOAD_OFFER_REVIEWS_ERROR: `SET_LOAD_OFFER_REVIEWS_ERROR`,
  SET_LOAD_NEARBY_ERROR: `SET_LOAD_NEARBY_ERROR`,
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

  loadNearby: (nearby) => {
    return ({
      type: ActionType.LOAD_NEARBY,
      payload: nearby
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

  setNearbyLoading: (isNearbyLoading) => {
    return (
      {
        type: ActionType.SET_NEARBY_LOADING,
        payload: isNearbyLoading
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

  setLoadNearbyError: (message) => {
    return (
      {
        type: ActionType.SET_LOAD_NEARBY_ERROR,
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

    case ActionType.LOAD_NEARBY:
      return extend(state, {
        nearby: action.payload
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

    case ActionType.SET_NEARBY_LOADING:
      return extend(state, {
        isNearbyLoading: action.payload
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

    case ActionType.SET_LOAD_NEARBY_ERROR:
      return extend(state, {
        loadNearbyError: action.payload
      });

    case ActionType.SET_LOAD_REVIEW_POSTING_ERROR:
      return extend(state, {
        loadReviewPostingError: action.payload
      });
  }

  return state;
};

export const Operation = {

  // Загрузка списка предложений
  loadHotels: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setOffersLoading(true));

    return api.get(Endpoint.OFFERS)
      .then((response) => {
        const adaptedOffers = response.data.map((offer) => getAdaptedOffer(offer));
        dispatch(ActionCreator.loadOffers(adaptedOffers));
        // Получаем список городов
        const citiesList = [
          ...new Set(adaptedOffers
            .map((offerObject) => offerObject.city.name)
            .slice(0, MAX_CITIES_AMOUNT))
        ];
        // Записываем его в список городов:
        dispatch(ActionCreator.setCities(citiesList));
        // Находим первый город и записываем его в активный
        const activeCity = citiesList[0] || ``;
        dispatch(AppActionCreator.setActiveCity(activeCity))
        // Завершаем запрос
        dispatch(ActionCreator.setOffersLoading(false));
        dispatch(ActionCreator.setLoadOffersError(``));
      })
      .catch((error) => {
        dispatch(ActionCreator.setOffersLoading(false));
        dispatch(ActionCreator.setLoadOffersError(error));
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setOfferReviewsLoading(true));

    return api.get(`${Endpoint.REVIEWS}/${id}`)
      .then((response) => {
        const adaptedReviews = response.data.map((review) => getAdaptedReview(review));
        dispatch(ActionCreator.loadOfferReviews(adaptedReviews));
        dispatch(ActionCreator.setOfferReviewsLoading(false));
        dispatch(ActionCreator.setLoadOfferReviewsError(``));
      })
      .catch((error) => {
        dispatch(ActionCreator.setOfferReviewsLoading(false));
        dispatch(ActionCreator.setLoadOfferReviewsError(error));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFavoritesLoading(true));

    return api.get(Endpoint.FAVORITE)
      .then((response) => {
        const adaptedOffers = response.data.map((offer) => getAdaptedOffer(offer));
        dispatch(ActionCreator.loadFavorites(adaptedOffers));
        dispatch(ActionCreator.setFavoritesLoading(false));
        dispatch(ActionCreator.setLoadFavoritesError(``));
      })
      .catch((error) => {
        dispatch(ActionCreator.setFavoritesLoading(false));
        dispatch(ActionCreator.setLoadFavoritesError(error));
      });
  },

  loadNearby: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setNearbyLoading(true));

    return api.get(`${Endpoint.OFFERS}/${id}/${Endpoint.NEARBY}`)
      .then((response) => {
        const adaptedOffers = response.data.map((offer) => getAdaptedOffer(offer));
        dispatch(ActionCreator.loadNearby(adaptedOffers));
        dispatch(ActionCreator.setNearbyLoading(false));
        dispatch(ActionCreator.setLoadNearbyError(``));
      })
      .catch((error) => {
        dispatch(ActionCreator.setNearbyLoading(false));
        dispatch(ActionCreator.setLoadNearbyError(error));
      });
  },

};
