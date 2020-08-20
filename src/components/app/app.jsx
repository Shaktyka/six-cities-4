import React from 'react';

// Служебные
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

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

const App = () => {

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

export default App;
