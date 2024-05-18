import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(false);
  const [name, setName] = useState("Passive");
  const [counters, setCounters] = useState([0, 1, 2, 3, 4]);
  const changeActive = () => {
    setActive(!active);
  };
  const addCounter = () => {
    let item = counters[counters.length - 1] + 1;
    counters.push(item);
    setCounters([...counters]);
  };
  const increaseCount = (index) => {
    counters[index] += 1;
    setCounters([...counters]);
  };
  const decreaseCount = (index) => {
    counters[index] -= 1;
    setCounters([...counters]);
  };

  return (
    <>
      {/* 1 task  */}
      {/* <h1>{count} metr</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>yurish</button>
      <h1>Qadamlar kattaligi: {step} metr</h1>
      <button onClick={() => setStep((walking) => walking + 1)}>
        qadamlarni kengaytrish
      </button> */}
      {/* 1 task tugadi  */}

      {/* 2 task  */}
      {/* <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-3 text-center">
            {active ? <h1>Login</h1> : <h1>Welcome</h1>}
            <button className="btn btn-info" onClick={changeActive}>
              login
            </button>
          </div>
        </div>
      </div> */}
      {/* 2 task tugadi  */}

      {/* 3 task  */}
      <div className="contianer">
        <div className="row mt-5">
          <div className="col-md-6 offset-3 text-center">
            <button className="btn btn-info" onClick={addCounter}>
              add counter
            </button>
            {counters?.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => increaseCount(index)}
                  >
                    +
                  </button>
                  <span>{item}</span>
                  <button
                    className="btn btn-success m-2"
                    onClick={() => decreaseCount(index)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3 task tugadi  */}
    </>
  );
}

export default App;
