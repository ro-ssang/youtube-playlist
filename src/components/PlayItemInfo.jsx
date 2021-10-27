import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PenIcon from '../icons/PenIcon';
import PlayIcon from '../icons/PlayIcon';
import TrashCan from '../icons/TrashCan';

const Container = styled.div`
  display: flex;
  margin-bottom: 2.5rem;

  img {
    max-width: 270px;
    width: 100%;
    height: 270px;
    object-fit: cover;
    box-shadow: 0 10px 20px 0 ${(props) => props.theme.playlistShadowColor};
    border-radius: 6px;
  }
`;
const Info = styled.div`
  max-width: 400px;
  margin-top: 50px;
  margin-left: 2.125rem;
  flex: 1 1 0%;
  font-size: 0.8125rem;
  font-weight: 200;
  color: ${(props) => props.theme.systemPrimary};
`;
const Title = styled.h1`
  margin-top: auto;
  margin-bottom: 1rem;
  font-size: 1.625rem;
  font-weight: 600;
  color: ${(props) => props.theme.systemPrimary};
`;
const ListDesc = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;
const ButtonCont = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 0px 20px;
  font-size: 14px;

  & > div {
    flex: 1 1 0%;
  }
`;
const Button = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: none;
  border: 1px solid ${(props) => props.theme.systemPrimary};
  border-radius: 2px;
  transition: color 0.5s ease 0s, background 1s ease 0s;
  cursor: pointer;
`;
const PlayButtonCont = styled.div`
  margin-top: 2rem;
`;
const PlayButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  background: ${(props) => props.theme.red};
  color: rgb(255, 255, 255);
  cursor: pointer;

  svg {
    margin-right: 0.25rem;
  }
`;

function PlayItemInfo({ playlistItems, pageTitle }) {
  const [count, setCount] = useState(0);
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    if (playlistItems.length) {
      const {
        snippet: {
          thumbnails: {
            medium: { url: imgUrl },
          },
        },
      } = playlistItems[0];
      setCount(playlistItems.length);
      setImgUrl(imgUrl);
    }
  }, [playlistItems]);

  return (
    <Container>
      <img src={imgUrl} alt="playlist thumbnail" />
      <Info>
        <Title>{pageTitle}</Title>
        <div>
          <span>재생목록</span>
          <span> &bull; </span>
          <span>이상로</span>
        </div>
        <ListDesc>
          <span>노래 {count}곡</span>
          <span> &bull; </span>
          <span>15분</span>
        </ListDesc>
        <ButtonCont>
          <div>
            <Button>
              <TrashCan />
              재생목록 삭제
            </Button>
          </div>
          <div>
            <Button>
              <PenIcon />
              재생목록 수정
            </Button>
          </div>
        </ButtonCont>
        <PlayButtonCont>
          <PlayButton>
            <PlayIcon />
            재생
          </PlayButton>
        </PlayButtonCont>
      </Info>
    </Container>
  );
}

export default PlayItemInfo;
