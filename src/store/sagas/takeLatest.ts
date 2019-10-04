import { takeLatest, delay, put } from 'redux-saga/effects';
import { TEST_TAKE_LATEST } from '../constants/take';
import { INCREMENT, DECREMENT } from '../constants/counter';
import { success } from 'src/utils/notify';

function* takeLatestSagaWorker() {
  yield success('TAKE_LATEST_START');

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield success('TAKE_LATEST_END');

}

export default function* takeLatestSaga() {
  yield takeLatest(
    TEST_TAKE_LATEST,
    takeLatestSagaWorker,
  );
}
