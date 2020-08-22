export const TABS = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const ACTIVE_TAB = TABS[0];

export const BASE_URL = `https://4.react.pages.academy/six-cities`;
export const RESPONSE_TIMEOUT = 5000;

export const MAX_CITIES_AMOUNT = 6;

export const FILTERS = [`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`];
export const ACTIVE_FILTER = `Popular`;

export const MOCK_EMAIL = `Oliver.conner@gmail.com`;

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  offer: `/offer`
};

export const Endpoint = {
  OFFERS: `/hotels`,
  FAVORITE: `/favorite`,
  REVIEWS: `/comments`,
  LOGIN: `/login`,
  NEARBY: `/nearby`,
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const LogoHeaderSize = {
  WIDTH: 81,
  HEIGHT: 41
};

export const LogoFooterSize = {
  WIDTH: 64,
  HEIGHT: 33
};

export const ReviewParams = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300
};

export const RatingToText = {
  1: `terribly`,
  2: `badly`,
  3: `not bad`,
  4: `good`,
  5: `perfect`
};

export const LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
export const ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;
