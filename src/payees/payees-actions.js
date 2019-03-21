export const actions = {
  SELECT_PAYEE: 'SELECT_PAYEE',
  SEARCH_PAYEES: 'SEARCH_PAYEES',
  SORT_PAYEES: 'SORT_PAYEES',
  FETCH_PAYEES: 'FETCH_PAYEES',
};

export const selectPayee = selectedPayee => ({
  type: actions.SELECT_PAYEE,
  payload: { selectedPayee }
});

export const searchPayees = criteria => ({
  type: actions.SEARCH_PAYEES,
  payload: { criteria }
});

export const sortPayees = (sortField) => ({
  type: actions.SORT_PAYEES,
  payload: { sortField }
});