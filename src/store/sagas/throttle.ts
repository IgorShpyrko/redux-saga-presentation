import { put, throttle } from 'redux-saga/effects';
import { THROTTLE_ACTION, CHANGE_THROTTLE_VALUE } from '../constants/throttle';

function* testSagaWorker(props: any) {
  yield put({
    type: CHANGE_THROTTLE_VALUE,
    payload: props.payload,
  });
}

export default function* throttleSaga() {
  yield throttle(1000, THROTTLE_ACTION, testSagaWorker);
}
