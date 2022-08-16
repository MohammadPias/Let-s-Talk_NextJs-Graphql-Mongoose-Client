import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import Layout from '../components/Layout';
import { client } from '../graphql/client/client';
import { AuthContextProvider } from '../context/authContext/authContext';




function MyApp({ Component, pageProps }) {
  // const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <ApolloProvider client={client}>
        <AuthContextProvider>
          <Layout hello="hello">
            <Component {...pageProps} />
          </Layout>
        </AuthContextProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
