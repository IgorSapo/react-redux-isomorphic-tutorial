import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';

import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

const component = (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      {routes}
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  component,
  document.querySelector('#react-view')
);
