import { IReduxAction } from "../types";
import { CHANGE_THROTTLE_VALUE } from "../constants/throttle";

type State = {
  value: string,
};

const initialState: State = Object.freeze({
  value: 'throttle',
});

export const throttleReducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case CHANGE_THROTTLE_VALUE:
      return {
        value: action.payload,
      };

    default:
      return state;
  }
};
