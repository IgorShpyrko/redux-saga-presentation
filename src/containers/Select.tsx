import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import { useInput } from 'src/hooks/useInput';

const Select: React.FC = () => {
  const input = useInput('count');

  const mapState = useCallback(
    state => ({
      state,
      value: state[input.value]
        ? state[input.value].value
        : 'incorrect value identifier',
    }),
    [input],
  );

  const { state, value } = useMappedState(mapState);

  return (
    <article>
      <h3>Select component</h3>
      <input type="text" value={input.value} onChange={input.onChange}/>
      {value}
      <h4>available keys in store</h4>
      <ul>
        {Object.keys(state).map((i: string) => {
          return (
            <li key={i} onClick={() => input.setValue(i)} >
              {i}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Select;
