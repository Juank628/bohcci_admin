import React from 'react';
import styles from './Product.module.scss';

export default function Product() {
  return (
    <form className={styles.container}>
      <div className={styles.zone_1}>
        <label htmlFor="name">
          Name
          <input id="name" type="text" />
        </label>

        <label htmlFor="description">
          Description
          <input id="description" type="text" />
        </label>

        <label htmlFor="family">
          Family
          <input id="family" type="text" />
        </label>

        <label htmlFor="price">
          Price
          <input id="price" type="number" />
        </label>

        <label htmlFor="Sale">
          Sale
          <input id="Sale" type="number" />
        </label>
      </div>
      <div className={styles.zone_2}>
        photo
      </div>
    </form>
  );
}
