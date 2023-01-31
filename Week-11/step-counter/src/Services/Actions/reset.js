import { ADD_STEP, RESET } from "../constants";

const resetStep = (data) => {
  console.warn(" reset Action Action ", data);
  return {
    type: RESET,
    data: data,
  };
};

export default resetStep;
