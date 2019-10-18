import React from 'react';
import NextIterators from './NextIterators';
import SymbolIterators from './SymbolIterators';

const Iterators: React.FC = () => {
  return (
    <article>
      <h2>Итераторы</h2>
      <NextIterators />
      <SymbolIterators />
    </article>
  );
};

export default Iterators;
