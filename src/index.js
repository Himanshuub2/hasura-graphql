import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient,InMemoryCache,ApolloProvider,gql} from "@apollo/client"
import { GoogleOAuthProvider } from '@react-oauth/google';
// import Admin from "./component/Admin/Admin"
import App from './App';


export const client =   new ApolloClient({
    uri: "https://blessed-walleye-41.hasura.app/v1/graphql",
    headers:{'x-hasura-admin-secret': `${process.env.REACT_APP_HASURA_SECRET}`},
    cache: new InMemoryCache(),
  })
 





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <ApolloProvider client= {client}>
      {console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)}
      <App />
      </ApolloProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

