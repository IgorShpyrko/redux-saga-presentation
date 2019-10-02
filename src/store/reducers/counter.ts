import { constants } from "../constants";
import { IReduxAction } from "../types";

type State = {
  value: number,
};

const initialState: State = Object.freeze({
  value: 0,
});

export const counterReducer = (state = initialState, action: IReduxAction) => {
  switch (action.type) {
    case constants.DECREMENT:
      return {
        value: state.value - 1,
      };

    case constants.INCREMENT:
      return {
        value: state.value + 1,
      };
    default:
      return state;
  }
};
