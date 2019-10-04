import React, { useCallback, useState } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { TEST_FORK } from 'src/store/constants/fork';

const ForkComponent: React.FC = () => {
  const [local, setLocal] = useState(0);
  const dispatch = useDispatch();

  const mapState = useCallback(
    state => ({
      value: state.count.value,
    }),
    [],
  );

  const { value } = useMappedState(mapState);

  const handleClick1 = () => {
    dispatch({ type: TEST_FORK });
  };

  const handleClick2 = () => {
    setLocal(+(Math.random() * 10).toFixed(0));
  };

  return (
    <article>
      <h3>Fork component</h3>
      <div>
        <button onClick={handleClick1}>click</button>
        <button onClick={handleClick2}>Alert</button>
      </div>
      <p>redux value: {value}</p>
      <p>local value: {local}</p>
      <hr/>
      <p>
        Эффект "TAKE" блокирующий.
        Если в процессе выполнения саги вызвать ее повторно -
        событие отработано не будет.
      </p>
    </article>
  );
};

export default ForkComponent;
