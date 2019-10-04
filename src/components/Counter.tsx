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
    <button onClick={onDecrement}>Decrement</button>
    <span>{' '}</span>
    <button onClick={onIncrement}>Increment</button>
    <hr />

    {/* Async actions */}
    <button onClick={onDecrementAsync}>Decrement Async</button>
    <span>{' '}</span>
    <button onClick={onIncrementAsync}>Increment Async</button>
    <hr />

    {/* Result */}
    <div>
      <span>Clicked: {value} times</span>
    </div>
  </>
);

export default Counter;
