import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import SeachIcon from '../icons/SearchIcon';
import LoginButton from '../components/LoginButton';
import UserContext from '../contexts/UserContext';
import LogoutButton from '../components/LogoutButton';
import Playlist from '../components/Playlist';

const LogoCont = styled.div`
  padding: 0 1.5625rem;
  font-size: 2.5rem;
  font-weight: bold;
`;
const SearchForm = styled.form`
  position: relative;
  margin-top: 1.25rem;
  padding: 0px 1.5625rem;

  & {
    input {
      width: 100%;
      height: 32px;
      border-radius: 4px;
      padding-left: 2rem;
      border: 1px solid ${(props) => props.theme.searchboxBorderColor};
      background: ${(props) => props.theme.searchboxBackground};
      color: ${(props) => props.theme.searchboxTextColor};
    }
  }
`;
const Nav = styled.nav`
  padding: 0px 1.5625rem;
  margin: 1rem 0px;
  overflow: auto;
`;
const LoginCont = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 72px;
  padding: 0px 1.5625rem;
  border-top: 0.5px solid ${(props) => props.theme.divider};
  background: ${(props) => props.theme.sidebarBg};

  img {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    margin-right: 15px;
    background: rgb(210, 210, 210);
    object-fit: cover;
  }
  a {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

function Aside() {
  const { state, actions } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      actions.setAccessToken(localStorage.getItem('accessToken'));
      actions.setProfile(JSON.parse(localStorage.getItem('profile')));
      actions.setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <LogoCont>
        <Link to="/">
          <Logo />
        </Link>
      </LogoCont>
      <SearchForm>
        <SeachIcon />
        <input type="text" placeholder="음악을 검색하세요" />
      </SearchForm>
      <Nav>{state.isLoggedIn && <Playlist />}</Nav>
      <LoginCont>{state.isLoggedIn ? <LogoutButton /> : <LoginButton />}</LoginCont>
    </>
  );
}

export default Aside;
