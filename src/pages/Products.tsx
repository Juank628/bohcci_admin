import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const GET_DATA = gql`
  {
    getAllProducts {
      id
      name
      description
    }
  }
`;

const Products = () => {
  const { data } = useQuery(GET_DATA);

  useEffect(() => {
    console.log(data.getAllProducts);
  });

  return <div>Products</div>;
};

export default Products;
