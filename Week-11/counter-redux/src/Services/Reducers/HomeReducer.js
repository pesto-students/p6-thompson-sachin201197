import { INC, DEC, RST } from "../Constants";

const intialState = {
  counter: 0,
};

function updateCounter(state = intialState, action) {
  switch (action.type) {
    case INC:
      return {
        counter: state.counter + 1,
      };
      break;
    case DEC:
      return {
        counter: state.counter - 1,
      };
      break;
    case RST:
      return {
        counter: 0,
      };
      break;
    default:
      return state;
  }
}

export default updateCounter;
