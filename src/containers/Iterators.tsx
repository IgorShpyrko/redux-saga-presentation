import React from 'react';

const Iterators: React.FC = (): React.ReactElement => {
  return (
    <article>
      <h3>Iterators</h3>

      <p>
        Перебираемые (или итерируемые) объекты – это концепция,
        которая позволяет использовать любой объект в цикле for...of.
      </p>

      <p>
        Чтобы сделать любой объект JS итерируемым (и позволить for..of работать с ним),
        нам нужно добавить в объект метод с именем Symbol.iterator
      </p>

      <p>
        Конструкция возвращаемого метода имеет вид:
        <pre>
        {`
function makeIteratorFromObject(someObj) {
  let current = 0;
  const last = Object.entries(someObj).length;

  return {

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
        `}
        </pre>
      </p>
    </article>
  );
};

export default Iterators;
