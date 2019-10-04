import React, { useCallback, useState } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import {
  TEST_TAKE,
  TEST_TAKE_EVERY_MANUAL,
  TEST_TAKE_EVERY,
  TEST_TAKE_LATEST,
  TEST_TAKE_LEADING,
} from 'src/store/constants/take';

const TakeComponent: React.FC = () => {
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
    dispatch({ type: TEST_TAKE });
  };

  const handleClick2 = () => {
    dispatch({ type: TEST_TAKE_EVERY_MANUAL });
  };

  const handleClick3 = () => {
    dispatch({ type: TEST_TAKE_EVERY });
  };

  const handleClick4 = () => {
    dispatch({ type: TEST_TAKE_LATEST });
  };

  const handleClick5 = () => {
    dispatch({ type: TEST_TAKE_LEADING });
  };

  const handleClickRandom = () => {
    setLocal(+(Math.random() * 10).toFixed(0));
  };

  return (
    <article>
      <h3>Take component</h3>
      <div>
        <button onClick={handleClick1}>Take</button>
        <button onClick={handleClick2}>Take Every Manual</button>
        <button onClick={handleClick3}>Take Every</button>
        <button onClick={handleClick4}>Take Latest</button>
        <button onClick={handleClick5}>Take Leading</button>
        <button onClick={handleClickRandom}>Random</button>
      </div>
      <p>redux value: {value}</p>
      <p>local random value: {local}</p>
      <hr/>
      <p>
        Эффект "TAKE" блокирующий.
        Если в процессе выполнения саги вызвать ее повторно -
        событие отработано не будет.
      </p>
      <p>
        Эффект принимает параметр "pattern" типа ожидаемого события
      </p>
      <div>
        Допустимые аргументы:
        <ol>
          <li>без аргумента</li>
          <li>аргумент ('*')</li>
          <li>аргумент типа "строка"</li>
          <li>аргумент типа "массив строк"</li>
          <li>аргумент типа "функция actionCreator"</li>
        </ol>
        <p>В случае 1 или 2 - вызывается при любом action</p>
      </div>
      <p>
        Эффект вызывается оди раз. Для повторяющихся вызовов необходимо
        запустить сагу в бесконечном цикле. Эта имплементация применяется в
        эффекте "takeLeading". Эффект "takeEvery" похож на предыдущий с одним отличием -
        при использовании "takeLeading" в цикле ледующее событие не отработает до
        конца выполнения предыдущего. В эффекте "takeEvery" события
        выполняются параллельно.
      </p>
    </article>
  );
};

export default TakeComponent;
