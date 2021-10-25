import React from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '../icons/GoogleIcon';

const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 72px;
  padding: 0px 1.5625rem;
  border-top: 0.5px solid ${(props) => props.theme.divider};
  background: ${(props) => props.theme.sidebarBg};

  & {
    div {
      display: inline-flex;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      padding: 0.75rem 1rem;
      background: ${(props) => props.theme.systemPrimary};
      color: ${(props) => props.theme.googleBtnColor};
      border-radius: 6px;
      font-size: 0.8125rem;
      cursor: pointer;
    }
    svg {
      margin-right: 10px;
    }
  }
`;

function LoginButton() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <Container>
      <GoogleLogin
        clientId="478590049856-de58rj0tomsahk0tpvq925st7jahf2tk.apps.googleusercontent.com"
        render={(renderProps) => (
          <div onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <GoogleIcon />
            <span>Sign in With Google</span>
          </div>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </Container>
  );
}

export default LoginButton;
