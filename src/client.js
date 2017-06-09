import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Link,
  browserHistory
} from 'react-router-dom';

import routes from './routes';

const component = (
  <BrowserRouter history={browserHistory}>
    {routes}
  </BrowserRouter>
);

ReactDOM.render(
  component,
  document.querySelector('#react-view')
);