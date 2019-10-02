import { take, put, delay } from 'redux-saga/effects';

// function* countTestWorker() {
//   yield delay(1000);
//   yield put({ type: 'TEST' });
// }

// function* countTestWatcher() {
//   yield take('TEST_ASYNC');
//   yield put({ type: 'TEST' });
// }

export default function* testSaga() {
  yield take('TEST_ASYNC');
  yield delay(1000);
  yield put({ type: 'TEST' });
}
