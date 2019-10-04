import { takeEvery, delay, put } from 'redux-saga/effects';
import { TEST_TAKE_EVERY } from '../constants/take';
import { INCREMENT, DECREMENT } from '../constants/counter';
import { success } from 'src/utils/notify';

function* takeEverySagaWorker() {
  yield success('TAKE_EVERY_START');

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield success('TAKE_EVERY_END');

}

export default function* takeEverySaga() {
  yield takeEvery(
    TEST_TAKE_EVERY,
    takeEverySagaWorker,
  );
}
