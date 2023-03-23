import React from 'react';
import { useQuery, gql } from '@apollo/client';

export default function Products() {
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
  console.log(data);

  return <div>Products</div>;
}
