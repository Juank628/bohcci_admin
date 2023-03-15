import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';

let client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      {
        getAllProducts {
          id
          name
          description
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
