import React from 'react';
import styled from 'styled-components';
import LoginButton from '../../components/LoginButton';
import Logo from '../../icons/Logo';

const Container = styled.section`
  margin-top: 76px;
  text-align: center;
`;
const LogoCont = styled.div`
  margin-bottom: 0.875rem;
`;
const PageTitle = styled.div`
  font-size: 48px;
  margin-bottom: 1rem;
  font-weight: bold;
`;
const PageDesc = styled.div`
  max-width: 380px;
  margin: 0px auto 1.875rem;
`;
const ImageCont = styled.div`
  img {
    width: 100%;
    max-width: 1680px;
    object-fit: cover;
  }
`;

function PublicMain() {
  return (
    <Container>
      <LogoCont>
        <Logo />
      </LogoCont>
      <PageTitle>매일 새로운 음악을 발견해 보세요.</PageTitle>
      <PageDesc>플레이리스트 및 인기 아티스트들의 음악을 탐색하거나 검색할수 있습니다.</PageDesc>
      <LoginButton width="210px" />
      <ImageCont>
        <img
          src="https://music.apple.com/assets/cwc/upsells/listen-now/web/en-us/medium.png"
          alt="Music App Preview Img"
        />
      </ImageCont>
    </Container>
  );
}

export default PublicMain;
