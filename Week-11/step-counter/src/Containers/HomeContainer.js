import Home from "../Components/Home";
import { connect } from "react-redux";
import addSteps from "../Services/Actions/actions";
import resetStep from "../Services/Actions/reset";

const mapStateToProps = (state) => (
  {
    data: state,
  },
  console.warn("Home contain ", state ? state.addSteps : 0)
);

const mapDispatchProps = (dispatch) => ({
  addStepsHandler: (data) => dispatch(addSteps(data)),
  resetHandler: (data) => dispatch(resetStep(data)),
});

export default connect(mapStateToProps, mapDispatchProps)(Home);
