import { useState } from "react";
import PropTypes from "prop-types";

// each time that there's a change in the state, the whole component code is
// re-run with the new values, and it's re-rendered.
export const CounterApp = ({ value }) => {
  // pass the counter value via setCounter function (decalred here).
  // useState(initialValue).
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    // not counter++ bc that needs a 'let', not 'const'.
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    // always wrap everything in an empty <> (it's a react Fragment).
    // it doesnt support multiple parent elements.
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label="btn-reset" onClick={handleReset}>
        {" "}
        Reset{" "}
      </button>
    </>
  );
};

// propTypes is to say which are required and of what types.
// there's also defaultTypes to define the default values, it works in the same way.
CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
