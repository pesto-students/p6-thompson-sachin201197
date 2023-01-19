import { ADD_STEP, RESET } from "../constants";

const addSteps = (data) => {
  console.warn("Action ", data);
  return {
    type: ADD_STEP,
    data: data,
  };
};

export default addSteps;
