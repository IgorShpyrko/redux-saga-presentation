import { constants } from "../constants";
import { IReduxAction } from "../types";

type State = {
  value: string,
};

const initialState: State = Object.freeze({
  value: 'test',
});

export const testReducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case constants.CHANGE_TEST_VALUE:
      return {
        value: action.payload,
      };

    default:
      return state;
  }
};
