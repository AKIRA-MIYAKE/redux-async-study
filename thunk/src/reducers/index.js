import { handleActions } from 'redux-actions';

import actions from '../actions';

export default handleActions({
  [actions.task1Request]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    errors: {
      ...state.errors,
      task1: undefined
    }
  }),
  [actions.task1Receive]: {
    next: (state, { payload }) => ({
      ...state,
      isLoading: false,
      task1Result: payload.result
    }),
    throw: (state, action) => ({
      ...state,
      isLoading: false,
      task1Result: action
    })
  },
  [actions.task2Request]: (state, { payload }) => ({
    ...state,
    isLoading: true,
    errors: {
      ...state.errors,
      task2: undefined
    }
  }),
  [actions.task2Receive]: {
    next: (state, { payload }) => ({
      ...state,
      isLoading: false,
      task2Result: payload.result,
      items: [...state.items, payload.result]
    }),
    throw: (state, action) => ({
      ...state,
      isLoading: false,
      task2Result: action
    })
  }
}, {
  items: [],
  isLoading: false,
  task1Result: undefined,
  task2Result: undefined
});
