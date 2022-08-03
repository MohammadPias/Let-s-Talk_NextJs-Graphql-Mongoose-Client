import { gql } from "@apollo/client";


export const CREATE_USER_MUTATION = gql`
mutation CreateUser($user: InputUser!){
    createUser(user: $user){
        name
        email
        phone
    }
}
`

export const MUTATION = gql`
mutation singleFileUpload($file: Upload!) {
  singleFileUpload(file: $file) {
    url
  }
}
`;

export const LOGIN_MUTATION = gql`
  query Login($email: String!, $password: String!){
    signIn(email:$email, password: $password){
      id
      token
      expiresToken
    }
  }
`