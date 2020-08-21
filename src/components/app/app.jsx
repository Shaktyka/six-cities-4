import React from 'react';

// Служебные
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  getAuthStatus,
  getAuthProgress,
  getUserData
} from '../../store/user/selectors';
import {
  getOffers,
  getIsOffersLoading,
  getLoadOffersError,
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
import {places} from '../../mocks.js';

const App = (props) => {
  const {
    offers,
    isOffersLoading,
    loadOffersError,
    cities,

    authStatus,
    isAuthProgress,
    userData,
  } = props;

  // console.log(cities);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path={AppRoute.ROOT}
          render={(props) => <Main places={places} {...props} />}
        />
        <Route
          exact path={`/offer/:id`}
          render={(props) => {
            return (<Offer
              offers={places}
              offerId={props.match.params.id}
              {...props}
            />);
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
  );
};

App.propTypes = {
  // places: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  isAuthProgress: getAuthProgress(state),
  userData: getUserData(state),
  offers: getOffers(state),
  isOffersLoading: getIsOffersLoading(state),
  loadOffersError: getLoadOffersError(state),
});

// const mapDispatchToProps = (dispatch) => ({
// });

export {App};
export default connect(mapStateToProps)(App);
