import React from 'react';
import styles from './TableHeader.module.scss';
import * as customTypes from '../types';

export default function TableHeader({ columns, sort }:customTypes.TableHeaderProps) {
  return (
    <thead>
      <tr>
        { columns.map((column) => (
          <th key={column} className={styles.cell}>
            <div>
              <span>{column}</span>
              <button type="button" name={column} onClick={sort}>⬇️</button>
            </div>
          </th>
        )) }
      </tr>
    </thead>
  );
}
