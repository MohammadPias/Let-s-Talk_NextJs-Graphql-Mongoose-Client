import { createUploadLink } from 'apollo-upload-client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const link = createUploadLink({ uri: process.env.BASE_URL })
const authLink = setContext((_, { headers }) => {
    const token = Cookies.get("token")
    console.log(token)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
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