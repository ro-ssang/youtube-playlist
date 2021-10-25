import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../icons/Logo';
import SeachIcon from '../icons/SearchIcon';
import LoginButton from '../components/LoginButton';

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

function Aside() {
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
      <Nav></Nav>
      <LoginButton />
    </>
  );
}

export default Aside;
