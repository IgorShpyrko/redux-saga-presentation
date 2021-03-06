import React, { useCallback } from 'react';
import Counter from 'src/components/Counter';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { constants } from 'src/store/constants';
import { ISagaAction } from 'src/store/types';

const CountExample: React.FC = () => {
  const dispatch = useDispatch();

  const mapState = useCallback(
    state => ({
      count: state.count.value,
    }),
    [],
  );

  const { count } = useMappedState(mapState);

  const action: (type: string, payload?: any) => ISagaAction = (
    (type: string, payload: any) => dispatch({ type, payload })
  );

  return (
    <article>
      <h3>Simple Saga count</h3>
      <Counter
        value={count}
        onIncrement={() => action(constants.INCREMENT)}
        onDecrement={() => action(constants.DECREMENT)}
        onIncrementAsync={() => action(constants.INCREMENT_ASYNC)}
        onDecrementAsync={() => action(constants.DECREMENT_ASYNC)}
      />
    </article>
  );
};

export default CountExample;
