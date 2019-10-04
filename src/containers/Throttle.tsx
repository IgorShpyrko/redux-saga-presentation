import React, { useCallback } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { THROTTLE_ACTION } from 'src/store/constants/throttle';

const ThrottleComponent: React.FC = () => {
  const mapState = useCallback(
    state => ({
      value: state.throttle.value,
    }),
    [],
  );

  const { value } = useMappedState(mapState);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch({
        type: THROTTLE_ACTION,
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

export default ThrottleComponent;
