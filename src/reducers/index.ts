import { State, ActionType } from "../types";
import { triangleType } from "../utils";
import { FIND_TRIANGLE, REST_TRIANGLE } from "../constants";

const initialState: State = {
  side1: "",
  side2: "",
  side3: "",
  type: undefined,
};

function rootReducer(state = initialState, action: ActionType): State {
  switch (action.type) {
    case FIND_TRIANGLE:
      const { side1, side2, side3 } = action.payload;
      return {
        ...state,
        side1,
        side2,
        side3,
        type: triangleType(+side1, +side2, +side3),
      };
    case REST_TRIANGLE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
}

export default rootReducer;
