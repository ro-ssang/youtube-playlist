import React from 'react';
import styled from 'styled-components';
import Aside from '../layouts/Aside';
import Main from '../layouts/Main';

const AsideWrap = styled.aside`
  display: grid;
  grid-template-rows: 50px auto 1fr auto;
  max-width: 280px;
  background-color: ${(props) => props.theme.sidebarBg};
  border-right: 1px solid ${(props) => props.theme.sidebarBorderColor};
`;
const MainWrap = styled.main`
  overflow-y: scroll;
`;
const Wrap = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${(props) => props.theme.sidebarwidth} 1fr;
  grid-template-rows: 100%;
`;

function Home() {
  return (
    <Wrap>
      <AsideWrap>
        <Aside />
      </AsideWrap>
      <MainWrap>
        <Main />
      </MainWrap>
    </Wrap>
  );
}

export default Home;
