import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient,InMemoryCache,ApolloProvider,gql} from "@apollo/client"

import App from './App';


export const client =   new ApolloClient({
    uri: "https://blessed-walleye-41.hasura.app/v1/graphql",
    headers:{'x-hasura-admin-secret': 'X6zuPUD9790r05cetEJQ72fNA359REWwGnrVe3uf6Wgsi2ryJ9b0e391VwpS2uz2'},
    cache: new InMemoryCache(),
  })
  





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client= {client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

