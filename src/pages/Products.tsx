import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import * as customTypes from '../types';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [products, setProducts] = useState<customTypes.Product[]>([]);
  const GET_DATA = gql`
    {
      getAllProducts {
        id
        name
        description
      }
    }
  `;
  const { data } = useQuery(GET_DATA);

  useEffect(() => {
    if (data !== undefined) {
      setProducts(data.getAllProducts);
    }
  }, [data]);

  return (
    <div>
      <ul>
        {products.map((product) => {
          const productData: customTypes.ProductCardProps = {
            data: product,
            color: 'red',
          };
          return <ProductCard data={productData.data} color={productData.color} />;
        })}
      </ul>
    </div>
  );
}
