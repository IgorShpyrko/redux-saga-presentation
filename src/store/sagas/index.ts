import { all } from 'redux-saga/effects';
import countSaga from './counter';
import testSaga from './testSaga';

export default function* rootSaga() {
  yield all([
    countSaga(),
    testSaga(),
  ]);
}
