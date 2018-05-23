import { createActions } from 'redux-actions';

export default createActions({
  TASK_1_REQUEST: () => ({}),
  TASK_1_RECEIVE: result => ({ result }),
  TASK_2_REQUEST: task1Result => ({ params: task1Result }),
  TASK_2_RECEIVE: result => ({ result })
});
