import React from 'react';
import styles from './ProductRow.module.scss';
import * as customTypes from '../types';

export default function ProductCard({ data } : customTypes.ProductCardProps) {
  return (
    <tr className={styles.container}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>{data.sale}</td>
      <td>{data.family}</td>
    </tr>
  );
}
