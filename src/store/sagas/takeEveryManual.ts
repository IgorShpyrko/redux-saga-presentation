import { take, delay, put } from 'redux-saga/effects';
import { TEST_TAKE_EVERY_MANUAL } from '../constants/take';
import { INCREMENT, DECREMENT } from '../constants/counter';
import { success } from 'src/utils/notify';

function* takeEveryManualSagaWorker() {
  yield success('TAKE_EVERY_MANUAL_START');

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield success('TAKE_EVERY_MANUAL_END');

}

export default function* takeEveryManualSaga() {

  while (true) {

    yield take(TEST_TAKE_EVERY_MANUAL);

    yield takeEveryManualSagaWorker();

  }
}
