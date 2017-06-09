import { INCREMENT_COUNTER } from '../actions/counterActions.js';

const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { value: state.value + 1 };
    default:
      return state;
  }
};
