import { call, put, takeLatest } from 'redux-saga/effects';

import actions from '../actions';

import { task1, task2 } from '../async-tasks';

function* task1Request() {
  try {
    const result = yield call(task1)
    yield put(actions.task1Receive(result));
  } catch(error) {
    yield put(actions.task1Receive(error));
  }
}

function* task1Receive(action) {
  if (!action.error) {
    yield put(actions.task2Request(action.payload.result));
  }
}

function* task2Request({ payload }) {
  try {
    const result = yield call(task2, payload.params);
    yield put(actions.task2Receive(result));
  } catch(error) {
    yield put(actions.task2Receive(error));
  }
}

export default function* () {
  yield takeLatest(actions.task1Request, task1Request);
  yield takeLatest(actions.task1Receive, task1Receive);
  yield takeLatest(actions.task2Request, task2Request);
}
