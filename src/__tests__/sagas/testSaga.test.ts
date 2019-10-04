import { delay } from 'redux-saga/effects';

import testSaga from '../../store/sagas/testSaga';

let gen: any;

beforeEach(() => {
  gen = testSaga();
});

afterEach(() => {
  gen = null;
});

describe('sjhfksfksdkj', () => {
  test('AAAAAAAAAa', () => {
    expect(gen.next('TEST_ASYNC').value).toBeTruthy();
  });
  test('qwe', () => {
    gen.next();
    expect(gen.next('TEST_ASYNC').value).toEqual(delay(1000));
  });
});
