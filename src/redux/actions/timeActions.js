import { fetch, parseResponse } from 'redux-oauth';
import { isUserSignedIn } from 'redux/models/user';

export const TIME_REQUEST_STARTED = 'TIME_REQUEST_STARTED';
export const TIME_REQUEST_SUCCESS = 'TIME_REQUEST_SUCCESS';
export const TIME_REQUEST_FAILURE = 'TIME_REQUEST_FAILURE';

const timeRequestStarted = () => ({
  type: TIME_REQUEST_STARTED
});

const timeRequestSucceded = (time) => ({
  type: TIME_REQUEST_SUCCESS,
  time
});

const timeRequestFailed = (error) => ({
  type: TIME_REQUEST_FAILURE,
  error
});

export const timeRequest = () => {
  return (dispatch, getState) => {
    if(!isUserSignedIn(getState())) {
      return Promise.resolve();
    }

    dispatch(timeRequestStarted());
    return dispatch(fetch('https://redux-oauth-backend.herokuapp.com/test/test'))
      .then(parseResponse)
      .then(({payload}) => dispatch(timeRequestSucceded(payload.time)))
      .catch(({error}) => dispatch(timeRequestFailed(error)));
  };
};
