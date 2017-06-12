import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import DevTools from './components/DevTools';

import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const initialState = window.REDUX_INITIAL_STATE || {};
const store = configureStore(initialState);

const component = (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      {routes(store)}
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  component,
  document.querySelector('#react-view')
);

ReactDOM.render(
  (<DevTools store={store} />),
  document.querySelector('#dev-tools')
);
