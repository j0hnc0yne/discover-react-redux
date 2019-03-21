import { actions } from './demos-actions';

const defaultState = {
  value: 0
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return {...state, value: state.value + 1};
    case actions.DECREMENT:
    return {...state, value: state.value - 1};
    case actions.ADD:
    return {...state, value: state.value + action.payload};
    default:
      return state;
  }
};
