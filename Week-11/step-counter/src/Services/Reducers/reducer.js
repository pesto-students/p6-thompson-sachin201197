import addSteps from "../Actions/actions";
import { ADD_STEP, RESET } from "../constants";
const intialState = {
  addSteps: 0,
};
export default function updateCounter(state = intialState, action) {
  switch (action.type) {
    case ADD_STEP:
      console.warn("Reducer ", action.data);
      return {
        addSteps: state.addSteps + 1,
      };
      break;
    case RESET:
      return {
        addSteps: 0,
      };
      break;
    default:
      console.log("No type found");
  }
}
