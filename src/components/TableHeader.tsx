import React from 'react';
import styles from './TableHeader.module.scss';
import * as customTypes from '../types';

export default function TableHeader({ columns, sortedColumn, sort }:customTypes.TableHeaderProps) {
  return (
    <thead>
      <tr>
        { columns.map((column) => (
          <th key={column} className={styles.cell}>
            <div>
              <span>{column}</span>
              <button type="button" name={column} onClick={sort}>
                {sortedColumn.name === column && sortedColumn.direction === -1 ? '⬇️' : null}
                {sortedColumn.name === column && sortedColumn.direction === 1 ? '⬆️' : null}
                {sortedColumn.name !== column ? '>' : null}
              </button>
            </div>
          </th>
        )) }
      </tr>
    </thead>
  );
}
