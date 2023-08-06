import React from "react";

const PureCounter = React.memo(({ count, onIncrement, onDecrement }) => {
  console.log("PureCounter rendered"); // This will only be called when props change
  return (
    <div className="Main_Contanier">
      <h2 className="heading">Counter Application</h2>
      <div className="Counter">
        <p>Count: {count}</p>
      </div>
      <div className="btn">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>

    </div>
  );
});

export default PureCounter;
