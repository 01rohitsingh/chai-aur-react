import { useState } from "react";
import "./App.css";

function App() {
  // state
  const [counter, setCounter] = useState(0);

  // functions
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      alert("Maximum limit reached (20)!");
    }
  };

  const removeValue = () => {
     if(counter>0)
     {
       setCounter(counter-1)
     }
     else{
      alert("U goes negative")
     }
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <h1>⚡ Interactive Counter App ⚡</h1>
      <h2>Counter Value : {counter}</h2>

      <div className="buttons">
        <button onClick={addValue}>➕ Add</button>
        <button onClick={removeValue}>➖ Decrease</button>
        <button onClick={resetValue}>🔄 Reset</button>
      </div>

      <p>Footer : Current counter = {counter}</p>
    </div>
  );
}

export default App;
