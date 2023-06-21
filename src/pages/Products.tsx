import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './Products.module.scss';
import * as customTypes from '../types';
import TableHeader from '../components/TableHeader';
import ProductRow from '../components/ProductRow';
import { useSortColumn } from '../hooks/sorting';

export default function Products() {
  const {
    sortedColumn, sortedProducts, sort, setInitialProducts,
  } = useSortColumn();

  const GET_DATA = gql`
    {
      getAllProducts {
        id
        name
        description
        price
        sale
        family
        stock
      }
    }
  `;
  const { data } = useQuery(GET_DATA);

  useEffect(() => {
    if (data !== undefined) {
      setInitialProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <table className={styles.productsTable}>
        <TableHeader columns={['id', 'name', 'description', 'price', 'sale', 'family']} sortedColumn={sortedColumn} sort={(e) => sort(e)} />
        <tbody>
          {sortedProducts.map((product) => {
            const productData: customTypes.ProductCardProps = {
              data: product,
            };
            return <ProductRow key={productData.data.id} data={productData.data} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
