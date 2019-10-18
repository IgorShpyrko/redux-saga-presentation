// tslint:disable: no-increment-decrement
// tslint:disable: function-name
import React, { Fragment, useState, useCallback } from 'react';
import { success, error  } from 'src/utils/notify';

interface IterableInterface {
  [x: string]: any;
}

class IterableObject implements IterableInterface {
  constructor(obj: any) {
    Object.keys(obj).forEach((i: any) => {
      this[i] = obj[i];
    });
  }
}

IterableObject.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this).filter(key =>
  this.hasOwnProperty(key));
  const values = keys.map(key => this[key]).values();
  return values;
};

const SymbolIterators: React.FC = () => {
  const [a, setA] = useState<any>({});
  const [nextA, setNextA] = useState<any>(null);
  const [newKey, setNewKey] = useState<string>('');
  const [newValue, setNewValue] = useState<any>('');

  const handleReset = useCallback(
    () => {
      setA({});
      setNextA(null);
    },
    [],
  );

  const handleSet = useCallback(
    () => {
      const newObj = new IterableObject({
        a: 1,
        b: [],
        c: { x: 1, y: null },
      });
      setA(newObj);
    },
    [],
  );

  const handleAddKeyToIterator = () => {
    const newObj = new IterableObject({
      ...a,
      [`${newKey}`]: newValue,
    });
    setA(newObj);
    setNewKey('');
    setNewValue('');
  };

  const handleIterate = useCallback(
    () => {
      try {
        for (const i of a) {
          success(JSON.stringify(i));
        }
      } catch (err) {
        error('error');
      }
    },
    [a],
  );

  return (
    <Fragment>
      <h3>[Symbol.iterator]</h3>
      <p>
        Объект является итерируемым, если в нем определен способ перебора
        значений, то есть, например, как значения перебираются в
        конструкции for..of. Некоторые встроенные типы, такие как Array
        или Map, по умолчанию являются итерируемыми, в то время как другие
        типы, как, например, Object, таковыми не являются.

        Чтобы быть итерируемым, объект обязан реализовать метод @@iterator,
        что означает, что он (или один из объектов выше по цепочке прототипов)
        обязан иметь свойство с именем Symbol.iterator:
      </p>
      <div>
        <h4>Пример создания объекта с методом [Symbol.iterator]</h4>

        <p>current Object: {JSON.stringify(a)}</p>
        <p>next Value: {JSON.stringify(nextA)}</p>

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSet}>Set New Iterable Object</button>
        <button onClick={handleAddKeyToIterator}>Add key to iterator</button>
        <button onClick={handleIterate}>Iterate</button>
        <p>
          <label>
            Новый ключ:
            <input type="text" value={newKey} onChange={e => setNewKey(e.target.value)}/>
          </label>
          <label>
            Новое значение:
            <input
              type="text"
              value={newValue}
              onChange={e => setNewValue(e.target.value)}
            />
          </label>
        </p>
        <p>
          Объекты String, Array, TypedArray, Map и Set являются итерируемыми,
          потому что их прототипы содержат метод Symbol.iterator.
        </p>
      </div>
    </Fragment>
  );
};

export default SymbolIterators;
