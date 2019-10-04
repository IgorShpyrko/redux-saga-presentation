import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { throttleReducer } from './throttle';
import { testReducer } from './test';

export default combineReducers({
  count: counterReducer,
  throttle: throttleReducer,
  test: testReducer,
});
