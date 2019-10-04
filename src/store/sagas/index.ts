import { all } from 'redux-saga/effects';
import countSaga from './counter';
import testSaga from './testSaga';
import throttleSaga from './throttle';
import takeSaga from './take';
import takeEverySaga from './takeEvery';
import takeEveryManualSaga from './takeEveryManual';
import takeLatestSaga from './takeLatest';
import takeLeadingSaga from './takeLeading';
import regexpSaga from './regexp';

export default function* rootSaga() {
  yield all([
    countSaga(),
    testSaga(),
    throttleSaga(),
    takeSaga(),
    takeEverySaga(),
    takeEveryManualSaga(),
    takeLatestSaga(),
    takeLeadingSaga(),
    regexpSaga(),
  ]);
}
