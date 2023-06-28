import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.scss';

export default function Product() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <form className={styles.zone_1}>
        <p className={styles.title}>{`id: ${id}`}</p>

        <label htmlFor="name">
          Name
          <input className="formInput" id="name" type="text" />
        </label>

        <label htmlFor="description">
          Description
          <input className="formInput" id="description" type="text" />
        </label>

        <label htmlFor="family">
          Family
          <input className="formInput" id="family" type="text" />
        </label>

        <label htmlFor="price">
          Price
          <input className="formInput" id="price" type="number" />
        </label>

        <label htmlFor="Sale">
          Sale
          <input className="formInput" id="Sale" type="number" />
        </label>

        <button className={styles.save} type="button">Guardar</button>
      </form>
      <div className={styles.zone_2}>
        <img src={`https://res.cloudinary.com/dh4r5apn8/image/upload/v1685382620/Bohcci/${id}.jpg`} alt="product" />
      </div>
    </div>
  );
}
