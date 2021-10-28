import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  ${(props) => `width: calc(100% - ${props.theme.sidebarwidth})`};
  height: ${(props) => props.theme.playerBarHeight};
  background-color: ${(props) => props.theme.playerBg};
  backdrop-filter: saturate(50%) blur(20px);
  color: ${(props) => props.theme.systemPrimary};
  z-index: 100;
`;
const LeftControlBox = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const SongInfo = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 0 px;
`;
const RightControlBox = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
`;

function Player() {
  return (
    <Container>
      <LeftControlBox>컨트롤 박스</LeftControlBox>
      <SongInfo>곡 정보</SongInfo>
      <RightControlBox>컨트롤 박스2</RightControlBox>
    </Container>
  );
}

export default Player;
