import { take, delay, put } from 'redux-saga/effects';
import { TEST_TAKE } from 'src/store/constants/take';
import { INCREMENT, DECREMENT } from 'src/store/constants/counter';
import { success } from 'src/utils/notify';

export default function* takeInfiniteSaga() {
  yield take(TEST_TAKE);

  yield success('TAKE_START');

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: INCREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield delay(1000);

  yield put({ type: DECREMENT });

  yield success('TAKE_END');
}
