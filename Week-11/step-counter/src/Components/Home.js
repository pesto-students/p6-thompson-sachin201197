import { useSelector } from "react-redux";

const Home = (props) => {
  console.warn("Home ", props);
  return (
    <div className="step-app">
      <h1>Step Counter</h1>
      <h3>
        You've walked {useSelector((state) => state)?.addSteps} steps today
      </h3>
      <button onClick={() => props.addStepsHandler({ stepCount: 0 })}>
        Add Steps
      </button>
      <button onClick={() => props.resetHandler({ stepCount: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Home;
