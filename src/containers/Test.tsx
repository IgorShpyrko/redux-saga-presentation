import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { CHANGE_TEST_VALUE } from 'src/store/constants/test';

const TestComponent: React.FC = () => {
  const mapState = useCallback(
    state => ({
      value: state.test.value,
    }),
    [],
  );

  const { value } = useMappedState(mapState);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch({
        type: CHANGE_TEST_VALUE,
        payload: e.target.value,
      });
    },
    [],
  );

  return (
    <article>
      <input type="text" value={value} onChange={handleChange}/>
    </article>
  );
};

export default TestComponent;
