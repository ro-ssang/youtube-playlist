import React from 'react';
import styled from 'styled-components';
import Aside from '../layouts/Aside';

const AsideWrap = styled.aside`
  display: grid;
  grid-template-rows: 50px auto 1fr auto;
  min-width: 280px;
  background-color: ${(props) => props.theme.sidebarBg};
  border-right: 1px solid ${(props) => props.theme.sidebarBorderColor};
`;
const MainWrap = styled.main`
  background: #ddd;
`;
const Wrap = styled.div`
  display: flex;
  height: 100vh;
`;

function Home() {
  return (
    <Wrap>
      <AsideWrap>
        <Aside />
      </AsideWrap>
      <MainWrap>
        <section id="section"></section>
      </MainWrap>
    </Wrap>
  );
}

export default Home;
