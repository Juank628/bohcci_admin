import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

export default function Products() {
  const [products, setProducts] = useState([{ id: 'waiting' }]);
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

  return <div>{products[0].id}</div>;
}
