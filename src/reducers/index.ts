import { State, ActionType } from "../types";
import { triangleType } from "../utils";

const initialState: State = {
  side1: "",
  side2: "",
  side3: "",
  type: undefined,
};

function rootReducer(state = initialState, action: ActionType): State {
  if (action.type === "FIND_TRIANGLE") {
    const { side1, side2, side3 } = action.payload;
    console.log("reducer happen");
    return {
      ...state,
      side1,
      side2,
      side3,
      type: triangleType(+side1, +side2, +side3),
    };
  }
  return state;
}

export default rootReducer;
