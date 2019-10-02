import React from 'react';

interface IProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: () => void;
  onDecrementAsync: () => void;
}

const Counter:React.FC<IProps> = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}) => (
  <>
    {/* Sync actions */}
    <button onClick={onIncrement}>Increment</button>
    <span>{' '}</span>
    <button onClick={onDecrement}>Decrement</button>
    <hr />

    {/* Async actions */}
    <button onClick={onIncrementAsync}>Increment Async</button>
    <span>{' '}</span>
    <button onClick={onDecrementAsync}>Decrement Async</button>
    <hr />

    {/* Result */}
    <div>
      <span>Clicked: {value} times</span>
    </div>
  </>
);

export default Counter;
