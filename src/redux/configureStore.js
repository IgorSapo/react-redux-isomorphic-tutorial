import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducer';

export default (initialState = {}) => {
  const rootReducer = combineReducers({
    counter: counterReducer
  });

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
