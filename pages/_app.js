import { ApolloProvider } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '../styles/globals.css'
import Layout from '../components/Layout';

const link = createUploadLink({ uri: process.env.BASE_URL })
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
  // console.log(token)

  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      'apollo-require-preflight': true,
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),


  // context: {
  //   headers: {
  //     'apollo-require-preflight': true,
  //     'Authorization': `Bearer ${token}`,
  //   },
  // },
})


function MyApp({ Component, pageProps }) {
  return <ApolloProvider client={client}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ApolloProvider>
}

export default MyApp
