import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://co3backend.vercel.app/graphql', // Ensure this matches your backend URL
  cache: new InMemoryCache(),
});

export default client;
