import React, { useContext } from 'react';
import styled from 'styled-components';
import { GoogleLogout } from 'react-google-login';
import UserContext from '../contexts/UserContext';

const Username = styled.div`
  font-size: 0.8125rem;
`;

function LogoutButton() {
  const { state, actions } = useContext(UserContext);

  const logout = (response) => {
    actions.setLoggedIn(false);
    actions.setAccessToken('');
    actions.setProfile({
      name: '',
      imageUrl: '',
    });
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
  };

  return (
    <GoogleLogout
      clientId="478590049856-de58rj0tomsahk0tpvq925st7jahf2tk.apps.googleusercontent.com"
      render={(renderProps) => (
        <>
          <img src={state.profile.imageUrl} alt="프로필 이미지" />
          <div>
            <Username>{state.profile.name}</Username>
            <a href="/" onClick={renderProps.onClick} disabled={renderProps.disabled}>
              로그아웃
            </a>
          </div>
        </>
      )}
      onLogoutSuccess={logout}
    ></GoogleLogout>
  );
}

export default LogoutButton;
