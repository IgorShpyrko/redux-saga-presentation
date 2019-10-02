import { takeEvery, put, delay, all } from 'redux-saga/effects';
import { constants } from '../constants';

function* countIncrementWorker() {
  yield delay(1000);
  yield put({ type: constants.INCREMENT });
}

function* countIncrementWatcher() {
  yield takeEvery(
    constants.INCREMENT_ASYNC,
    countIncrementWorker,
  );
}

function* countDecrementWorker() {
  yield delay(1000);
  yield put({ type: constants.DECREMENT });
}

function* countDecrementWatcher() {
  yield takeEvery(
    constants.DECREMENT_ASYNC,
    countDecrementWorker,
  );
}

export default function* countSaga() {
  yield all([
    countIncrementWatcher(),
    countDecrementWatcher(),
  ]);
}
