import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

const SINGIN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = props => {
  useEffect(() => {
    document.title = 'Sign In - Notedly';
  });

  const client = useApolloClient();

  const [singIn, { loading, error }] = useMutation(SINGIN_USER, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn);
      client.writeData({ data: { isLoggedIn: true } });
      props.history.push('/');
    }
  });

  return (
    <React.Fragment>
      <UserForm action={singIn} formType="signIn" />
      {loading && <p>Loading...</p>}
      {error && <p>Error signing in!</p>}
    </React.Fragment>
  );
};

export default SignIn;
