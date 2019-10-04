import { call, fork, take } from 'redux-saga/effects';

export function* takexSaga(pattern: any) {
  let action;

  while (true) {
    action = yield take('*');
    // console.log('takex', action.type);
    if (pattern.test(action.type)) {
      console.log('takex:match', action.type);
      break;
    }
    // console.log('takex:ignore', action.type);
  }
  return action;
}

export function takex(pattern: any) {
  return call(takexSaga, pattern);
}

export function* handleActions() {
  while (true) {
    const action = yield takex(/^FETCH_/);
    console.log('handle', action.type);
  }
}

export default function* regexpSaga() {
  yield fork(handleActions);
}
