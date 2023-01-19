import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    dispatch({ type: e.target.value });
  };
  return (
    <>
      <div className="counter-app">
        <h1> Counter APP</h1>
        <h2>{useSelector((state) => state)?.counter}</h2>
        <button value={"INCREMENT"} onClick={onClickHandler}>
          INCREMENT
        </button>
        <button value={"DECREMENT"} onClick={onClickHandler}>
          DECREMENT
        </button>
        <button value={"RESET"} onClick={onClickHandler}>
          RESET
        </button>
      </div>
    </>
  );
};

export default Home;
