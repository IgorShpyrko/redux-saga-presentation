import { takeEvery, put, delay, all } from 'redux-saga/effects';
import { constants } from '../constants';
import { success } from 'src/utils/notify';

function* countIncrementWorker() {
  success('COUNT_EXAMPLE INCREMENT_ASYNC_START');

  yield delay(1000);

  yield put({ type: constants.INCREMENT });

  success('COUNT_EXAMPLE INCREMENT_ASYNC_END');
}

function* countIncrementWatcher() {
  yield takeEvery(
    constants.INCREMENT_ASYNC,
    countIncrementWorker,
  );
}

function* countDecrementWorker() {
  success('COUNT_EXAMPLE DECREMENT_ASYNC_START');

  yield delay(1000);

  yield put({ type: constants.DECREMENT });

  success('COUNT_EXAMPLE DECREMENT_ASYNC_END');

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
