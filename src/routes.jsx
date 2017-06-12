import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App';
import CounterPage from './components/CounterPage';
import HelloWorldPage from './components/HelloWorldPage';
import TimePage from './components/TimePage';
import { isUserSignedIn } from 'redux/models/user';

// const requireAuth = (nextState, transition, cb) => {
// 	setTimeout(() => {
//     if (!isUserSignedIn(store.getState())) {
//       transition('/')
//     }
//     cb();
//   }, 0);
// }

let store;

export default function routes(storeRef) {
  store = storeRef;
  return (
    <App>
      <Route exact path='/' component={HelloWorldPage} />
      <Route path='/counters' component={CounterPage} />
      <Route
        path='/time'
        render={
          () => 
            isUserSignedIn(store.getState()) ?
              (<TimePage />) :
              (<Redirect to={{pathname: '/'}} />)
        }
      />
    </App>
  )
}
