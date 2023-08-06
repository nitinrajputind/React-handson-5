import React, { useState } from 'react';
import PureCounter from './PureCounter';
const withCounter = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount((prevCount) => prevCount + 1);
    };

    const handleDecrement = () => {
      setCount((prevCount) => prevCount - 1);
    };

    return (
      <WrappedComponent
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    );
  };

  return EnhancedComponent;
};

// Usage
const CounterWithLogic = withCounter(PureCounter);

export default CounterWithLogic;
