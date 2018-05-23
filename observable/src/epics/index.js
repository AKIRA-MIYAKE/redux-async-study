import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

import actions from '../actions';

import { task1, task2 } from '../async-tasks';

const execTask1 = () => Observable.fromPromise(task1());
const execTask2 = task1Result => Observable.fromPromise(task2(task1Result));

const task1RequestEpic = action$ => action$
  .ofType(actions.task1Request)
  .mergeMap(action => execTask1()
    .map(result => actions.task1Receive(result))
    .catch(error => Observable.of(actions.task1Receive(error)))
  );

const task2RequestEpic = action$ => action$
  .ofType(actions.task2Request)
  .mergeMap(action => execTask2(action.payload.params)
    .map(result => actions.task2Receive(result))
    .catch(error => Observable.of(actions.task2Receive(error)))
  );

const task1ReceiveEpic = action$ => action$
  .ofType(actions.task1Receive)
  .map(action => {
    if (!action.error) {
      return actions.task2Request(action.payload.result);
    } else {
      return { type: '' };
    }
  });

export default combineEpics(
  task1RequestEpic,
  task2RequestEpic,
  task1ReceiveEpic
);
