import {
  TIME_REQUEST_STARTED,
  TIME_REQUEST_SUCCESS,
  TIME_REQUEST_FAILURE
} from '../actions/timeActions';
import { SIGN_OUT } from 'redux-oauth';

const initialState = {
  time: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TIME_REQUEST_STARTED:
      return Object.assign({}, state, { loading: true });
    case TIME_REQUEST_SUCCESS:
      return {
        loading: false,
        error: null,
        time: action.time
      };
    case TIME_REQUEST_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.error });
    case SIGN_OUT:
      return initialState
    default:
      return state;
  }
};
