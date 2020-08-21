import React from 'react';

// Служебные
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../store/data/data';
import {
  getAuthStatus,
  getAuthProgress,
  getUserData
} from '../../store/user/selectors';
import {
  getCityOffers,
  getOffers,
  getIsOffersLoading,
  getLoadOffersError,
  getOfferReviews,
} from '../../store/data/selectors';

// Компоненты
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Offer from '../offer/offer.jsx';
import NotFound from '../not-found/not-found.jsx';
import Login from '../login/login.jsx';
import Loader from '../loader/loader.jsx';
import ErrorMessage from '../error-message/error-message.jsx';

// Константы и пр.
import {AppRoute} from '../../consts.js';

const App = (props) => {
  const {
    allOffers,
    offers,
    isOffersLoading,
    loadOffersError,
    cities,
    getOfferReviews,

    authStatus,
    isAuthProgress,
    userData,
  } = props;

  return (
    <>
      {
        (!isAuthProgress && !isOffersLoading && offers.length > 0) ?
          <BrowserRouter>
            <Switch>
              <Route
                exact path={AppRoute.ROOT}
                render={(props) => <Main places={offers} {...props} />}
              />
              <Route
                exact path={`/offer/:id`}
                render={(props) => {
                  // getOfferReviews(props.match.params.id);
                  return <Offer offers={allOffers} {...props} />;
                }}
              />
              <Route
                exact path={AppRoute.LOGIN}
                render={(props) => <Login {...props} />}
              />
              <Route
                exact path={AppRoute.FAVORITES}
                render={(props) => <Favorites {...props} />}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </BrowserRouter>
          :
          <Loader />
      }
    </>
  );
};

App.propTypes = {
  // places: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  isAuthProgress: getAuthProgress(state),
  userData: getUserData(state),
  offers: getCityOffers(state),
  allOffers: getOffers(state),
  isOffersLoading: getIsOffersLoading(state),
  loadOffersError: getLoadOffersError(state),
});

const mapDispatchToProps = (dispatch) => ({
  getOfferReviews(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {App};
export default connect(mapStateToProps)(App);
