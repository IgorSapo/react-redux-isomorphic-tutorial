import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import { StaticRouter } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import cookieParser from 'cookie-parser';
import { getHeaders, initialize } from 'redux-oauth';
import { timeRequest } from './redux/actions/timeActions';

const app = express();

app.use(cookieParser());

app.get(/^\/.*/, (req, res) => {
  const context = {};
  const store = configureStore();

  return store.dispatch(initialize({
      backend: {
        apiUrl: 'https://redux-oauth-backend.herokuapp.com',
        authProviderPaths: {
          github: '/auth/github'
        },
        signOutPath: null
      },
      currentLocation: req.url,
      cookies: req.cookies
    }))
    .then(() => store.dispatch(timeRequest()))
    .then(() => {
      if (context.url) {
        res.redirect(context.status, context.url);
      } else {
        const state = store.getState();
        const componentHTML = ReactDom.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              {routes(store)}
            </StaticRouter>
          </Provider>
        );

        res.cookie(
          'authHeaders',
          JSON.stringify(getHeaders(state)),
          {
            maxAge: Date.now() + 14*24*3600*100
          }
        );
        res.end(renderHTML(componentHTML, state));
      };
    })
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '';

function renderHTML(componentHTML, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello React</title>
        <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
        <script type='application/javascript'>
          window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <div id='dev-tools'></div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
