export const actions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD: 'ADD',
};

export const add = amount => ({
  type: actions.ADD,
  payload: amount,
});

export const increment = () => {
  console.log('Called increment');
  return {
    type: actions.INCREMENT,
  };
};

export const decrement = () => ({
  type: actions.DECREMENT,
});
