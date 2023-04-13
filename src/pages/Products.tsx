import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import styles from './Products.module.scss';
import * as customTypes from '../types';
import TableHeader from '../components/TableHeader';
import ProductRow from '../components/ProductRow';

export default function Products() {
  const [products, setProducts] = useState<customTypes.Product[]>([]);
  const [sortDirection, setSortDirection] = useState(1);
  const [sortedColumn, setSortedColumn] = useState({ name: '', direction: 1 });
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

  const sortByString = (e: React.MouseEvent<HTMLButtonElement>) => {
    const columnName = e.currentTarget.name;
    const firstElement: string | number = products[0][columnName as keyof object];

    if (typeof firstElement === 'number') {
      const sortedProducts = [...products].sort((a, b) => (
        (a[columnName as keyof object] - b[columnName as keyof object]) * sortDirection
      ));
      setProducts(sortedProducts);
    } else {
      const sortedProducts = [...products].sort((a, b) => {
        if (a[columnName as keyof object] < b[columnName as keyof object]) {
          return -1 * sortDirection;
        }
        return 1 * sortDirection;
      });
      setProducts(sortedProducts);
    }
    setSortedColumn({
      name: columnName,
      direction: sortDirection,
    });
    setSortDirection(sortDirection * -1);
  };

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <table className={styles.productsTable}>
        <TableHeader columns={['id', 'name', 'description', 'price', 'sale', 'family']} sortedColumn={sortedColumn} sort={(e) => sortByString(e)} />
        <tbody>
          {products.map((product) => {
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
