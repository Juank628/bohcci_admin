import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
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
        {products.map((product) => (
          <li key={product.id}>{product.id}</li>
        ))}
      </ul>
    </div>
  );
}
