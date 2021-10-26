import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '../icons/GoogleIcon';
import UserContext from '../contexts/UserContext';

const Container = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  width: ${(props) => props.width || '100%'};
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.systemPrimary};
  color: ${(props) => props.theme.googleBtnColor};
  border-radius: 6px;
  font-size: 0.8125rem;
  cursor: pointer;

  & {
    svg {
      margin-right: 10px;
    }
  }
`;

function LoginButton({ width }) {
  const { actions } = useContext(UserContext);

  const responseGoogle = (response) => {
    const userProfile = {
      name: response.profileObj.name,
      imageUrl: response.profileObj.imageUrl,
    };
    const accessToken = response.accessToken;
    actions.setAccessToken(accessToken);
    actions.setProfile(userProfile);
    actions.setLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('profile', JSON.stringify(userProfile));
    localStorage.setItem('accessToken', accessToken);
  };

  return (
    <GoogleLogin
      clientId="478590049856-de58rj0tomsahk0tpvq925st7jahf2tk.apps.googleusercontent.com"
      render={(renderProps) => (
        <Container width={width} onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <GoogleIcon />
          <span>Sign in With Google</span>
        </Container>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default LoginButton;
