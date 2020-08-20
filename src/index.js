import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import reducer from './store/reducer.js';
import thunk from 'redux-thunk';
import createAPI from './api.js';
import {Operation as UserOperation, ActionCreator} from './store/user/user';
import {AuthStatus} from './consts.js';
import {Operation as DataOperation} from './store/data/data.js';

import App from './components/app/app.jsx';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);
const root = document.querySelector(`#root`);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadHotels());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
);
