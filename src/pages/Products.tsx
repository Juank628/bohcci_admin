import { useQuery, gql } from '@apollo/client';

const Products = () => {
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
};

export default Products;
