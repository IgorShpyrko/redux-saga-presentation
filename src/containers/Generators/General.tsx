import React, { Fragment, useCallback, useState } from 'react';
import { success, error } from 'src/utils/notify';

const General: React.FC = () => {
  const [generator, setGenerator] = useState<Generator | null>(null);
  const [generatorValue, setGeneratorValue] = useState<string>('');
  function* sample() {
    yield "first";
    yield "second";
  }

  const it = sample();

  const handleClickSample = useCallback(
    () => {
      try {
        success(JSON.stringify(it.next()));
      } catch (err) {
        error('something went wrong');
      }
    },
    [it],
  );

  function* favBeer() {
    const reply = yield "What is your favorite type of beer?";
    success(reply);
    if (reply !== "ipa") return "No soup for you!";
    return "OK, soup.";
  }

  const handleCreateGenerator = useCallback(
    () => {
      setGenerator(favBeer());
    },
    [favBeer],
  );

  const handleRunGenerator = useCallback(
    () => {
      if (generator) {
        if (generatorValue) {
          success(JSON.stringify(generator.next(generatorValue)));
        }
        success(JSON.stringify(generator.next()));
      }
    },
    [generator, generatorValue],
  );

  // {
  //   const it = favBeer();
  //   const q = it.next().value;
  //   success(q);
  //   const a = it.next("lager").value;
  //   success(a);
  // }

  // {
  //   const it = favBeer();
  //   const q = it.next().value;
  //   success(q);
  //   const a = it.next("ipa").value;
  //   success(a);
  // }
  return (
    <Fragment>
      <p>Что же такое генераторы?</p>
      <p>Генераторы — это функции, которые работают как фабрики итераторов.</p>

      <button onClick={handleClickSample}>Пример</button>

      <p>
        При вызове функции-генератора она возвращает нам объект-итератор с методом next().
        Вызовов обработчиков при инициализации итератора не происходит.
      </p>

      <p>
        Итераторы и генераторы могут обмениваться данными в двух направлениях. А именно,
        генераторы, с помощью ключевого слова yield, могут возвращать значения итераторам,
        однако и итераторы могут отправлять данные генераторам, используя метод
        iterator.next('someValue')
      </p>

    <button onClick={handleCreateGenerator}>Новый генератор</button>
    <input type="text" value={generatorValue} onChange={e => setGeneratorValue(e.target.value)}/>
    <button onClick={handleRunGenerator}>Вызов генератора с параметром: </button>
    <span>{generatorValue}</span>

    </Fragment>
  );
};

export default General;
