import React, { useState } from 'react';
import * as customTypes from '../types';

export const useSortColumn = () => {
  const [sortDirection, setSortDirection] = useState(1);
  const [sortedColumn, setSortedColumn] = useState({ name: '', direction: 1 });
  const [sortedProducts, setSortedProducts] = useState<customTypes.Product[]>([]);

  const setInitialProducts = (products:customTypes.Product[]) => setSortedProducts(products);

  const sort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const columnName = e.currentTarget.name;
    const firstElement: string | number = sortedProducts[0][columnName as keyof object];

    if (typeof firstElement === 'number') {
      const sorted = [...sortedProducts].sort((a, b) => (
        (a[columnName as keyof object] - b[columnName as keyof object]) * sortDirection
      ));
      setSortedProducts(sorted);
    } else {
      const sorted = [...sortedProducts].sort((a, b) => {
        if (a[columnName as keyof object] < b[columnName as keyof object]) {
          return -1 * sortDirection;
        }
        return 1 * sortDirection;
      });
      setSortedProducts(sorted);
    }
    setSortedColumn({
      name: columnName,
      direction: sortDirection,
    });
    setSortDirection(sortDirection * -1);
  };

  return {
    sortedColumn, sortedProducts, sort, setInitialProducts,
  };
};

export const dummy = () => undefined;
