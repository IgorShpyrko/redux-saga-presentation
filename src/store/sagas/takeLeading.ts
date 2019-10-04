import { takeLeading, delay, put } from 'redux-saga/effects';
import { TEST_TAKE_LEADING } from '../constants/take';
import { INCREMENT, DECREMENT } from '../constants/counter';
import { success } from 'src/utils/notify';

function* takeLeadingSagaWorker() {
  yield success('TAKE_LEADING_START');

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield success('TAKE_LEADING_END');

}

export default function* takeLeadingSaga() {
  yield takeLeading(
    TEST_TAKE_LEADING,
    takeLeadingSagaWorker,
  );
}
