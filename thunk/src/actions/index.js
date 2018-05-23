import { createActions } from 'redux-actions';

import { task1, task2 } from '../async-tasks';

const actions = createActions({
  TASK_1_REQUEST: () => ({}),
  TASK_1_RECEIVE: result => ({ result }),
  TASK_2_REQUEST: () => ({}),
  TASK_2_RECEIVE: result => ({ result })
});

export const execTasks = () => async dispatch => {
  dispatch(actions.task1Request());

  let task1Result;
  try {
    task1Result = await task1();
    dispatch(actions.task1Receive(task1Result));
  } catch(error) {
    dispatch(actions.task1Receive(error));
  }

  if (!task1Result) {
    return;
  }

  dispatch(actions.task2Request());

  try {
    const result = await task2(task1Result);
    dispatch(actions.task2Receive(result));
  } catch(error) {
    dispatch(actions.task2Receive(error));
  }
}

export default actions;
