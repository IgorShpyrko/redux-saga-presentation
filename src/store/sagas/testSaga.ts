import { take, put, delay } from 'redux-saga/effects';

export default function* testSaga() {
  while (true) {
    yield take('TEST_ASYNC');
    console.log('TEST_ASYNC');
    yield delay(1000);
    yield put({ type: 'TEST' });
  }
}
