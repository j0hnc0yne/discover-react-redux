import reducer from './payees-reducer';
import { sortPayees } from './payees-actions';

let state;

beforeEach(() => {
  state = {
    sortField: '',
    sortDirection: 'asc',
  };
});

it('should update the sortField', () => {
  const initializedState = reducer(state, { type: 'INIT' });
  expect(initializedState.sortDirection).toBe(state.sortDirection);

  const nextState = reducer(initializedState, sortPayees('payeeName'));
  expect(nextState.sortField).toBe('payeeName');
  expect(nextState.sortDirection).toBe('asc');
});

it('should flip the sortDirection', () => {
  const sortField = 'payeeName';
  const startState = reducer(state, sortPayees(sortField));
  expect(startState.sortField).toBe(sortField);
  expect(startState.sortDirection).toBe('asc');

  const nextState = reducer(startState, sortPayees(sortField));
  expect(nextState.sortField).toBe(sortField);
  expect(nextState.sortDirection).toBe('desc');
});
