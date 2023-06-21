import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductRow.module.scss';
import * as customTypes from '../types';

export default function ProductCard({ data } : customTypes.ProductCardProps) {
  const navigate = useNavigate();
  const goToLink = () => navigate(`/products/${data.id}`);

  return (
    <tr className={styles.container} onClick={goToLink}>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>{data.sale}</td>
      <td>{data.family}</td>
    </tr>
  );
}
