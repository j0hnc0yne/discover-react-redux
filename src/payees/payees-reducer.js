import { actions } from './payees-actions';

const initialState = {
  criteria: {},
  selectedPayee: 0,
  sortField: '',
  sortDirection: 'asc'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.SEARCH_PAYEES:
    case actions.SELECT_PAYEE:
      return { ...state, ...payload };

    case actions.SORT_PAYEES:
      let sortDirection = 'asc';
      if (payload.sortField === state.sortField && state.sortDirection === 'asc') {
        sortDirection = 'desc';
      }
      return {...state, ...payload, sortDirection};


    default:
      return state;
  }
};
