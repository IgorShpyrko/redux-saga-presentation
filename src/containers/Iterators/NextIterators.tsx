// tslint:disable: no-increment-decrement
import React, { useCallback, useState, Fragment } from 'react';
import { success, error } from 'src/utils/notify';

function makeIteratorFromObject(someObj: any) {
  // Проверяем наличие метода next()
  if (Object.getOwnPropertyNames(someObj).includes('next')) {
    return someObj;
  }

  // Определяем позицию итерируемого елемента
  Object.defineProperty(someObj, 'current', { value: 0, enumerable: false, writable: true });

  const next = () => {
    const done = someObj.current >= Object.keys(someObj).length;
    const value = !done ? someObj[Object.keys(someObj)[someObj.current]] : undefined;
    someObj.current++;

    return { value, done };
  };

  Object.defineProperty(someObj, 'next', { value: next, enumerable: false, writable: false });

  return someObj;
}

const NextIterators: React.FC = (): React.ReactElement => {
  const [a, setA] = useState<any>({});
  const [nextA, setNextA] = useState<any>(null);

  const handleReset = useCallback(
    () => {
      setA({});
      setNextA(null);
    },
    [],
  );

  const handleSet = useCallback(
    () => {
      setA({
        a: 1,
        b: [],
        c: { x: 1, y: null },
      });
    },
    [],
  );

  const handleAddIterator = useCallback(
    () => {
      const iterableObj = makeIteratorFromObject(a);
      setA(iterableObj);
    },
    [a],
  );

  const handleIterate = useCallback(
    () => {
      try {
        setNextA(a.next());
        success('success');
      } catch (err) {
        setNextA(null);
        error('error');
      }
    },
    [a],
  );

  return (
    <Fragment>
      <h3>Метод Next()</h3>
      <p>
        Перебираемые (или итерируемые) объекты – это концепция,
        которая позволяет использовать любой объект в цикле for...of.
      </p>

      <p>
        Для начала давайте разберемся что такое метод next()
      </p>

      <p>
        Объект является итератором, если он умеет обращаться к элементам
        коллекции по одному за раз, при этом отслеживая свое текущее положение
        внутри этой последовательности. В JavaScript итератор - это объект,
        который предоставляет метод next(), возвращающий следующий элемент
        последовательности. Этот метод возвращает объект с двумя свойствами: done и value.

        После создания, объект-итератор может быть явно использован,
        с помощью вызовов метода next().
      </p>

      <div>
        <h4>Пример создания объекта с методом Next()</h4>

        <p>current Object: {JSON.stringify(a)}</p>
        <p>next Value: {JSON.stringify(nextA)}</p>

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSet}>Set New Object</button>
        <button onClick={handleAddIterator}>Add iterator</button>
        <button onClick={handleIterate}>Call next()</button>
      </div>

      <p>
        Чтобы сделать любой объект JS итерируемым (и позволить for..of работать с ним),
        нам нужно добавить в объект метод с именем Symbol.iterator
      </p>

    </Fragment>
  );
};

export default NextIterators;
