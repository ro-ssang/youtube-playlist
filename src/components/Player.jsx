import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { videoApi } from '../apis/youtubeApi';
import UserContext from '../contexts/UserContext';
import LoopIcon from '../icons/LoopIcon';
import NextIcon from '../icons/NextIcon';
import PauseIcon from '../icons/PauseIcon';
import PlayIconLg from '../icons/PlayIconLg';
import PrevIcon from '../icons/PrevIcon';
import ShuffleIcon from '../icons/ShuffleIcon';
import UpIcon from '../icons/UpIcon';
import VolumeIcon from '../icons/VolumeIcon';
import Loader from './Loader';
import VolumeController from './VolumeController';

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  right: 17px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  ${(props) => `width: calc(100% - ${props.theme.sidebarwidth} - 17px)`};
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

  & > div {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0px 0.5rem 0px 0px;
    fill: ${(props) => props.theme.themeColor};

    &:last-child {
      position: relative;
      width: 64px;
      cursor: pointer;
      user-select: none;
    }
  }
`;
const SongInfo = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  min-width: 0px;

  & > div {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    min-width: 0px;
  }
`;
const SongThumbnail = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgb(66, 66, 66);
  border-radius: 2px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }
`;
const SongDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0px;

  a {
    display: block;
    min-width: 0px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.8125rem;
    color: ${(props) => props.theme.playerTitleColor};
  }

  & > div {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    min-width: 0px;
    color: ${(props) => props.theme.playerDescColor};
    font-size: 0.8125rem;
  }
`;
const RightControlBox = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;

  & > span {
    font-size: 0.75rem;
    color: rgb(170, 170, 170);
  }

  & > div {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin: 0px 0.5rem 0px 0px;
    fill: ${(props) => props.theme.themeColor};
  }
`;

function Player() {
  const [isLoading, setLoading] = useState(true);
  const [songInfo, setSongInfo] = useState(null);
  const [error, setError] = useState(false);
  const { state, actions } = useContext(UserContext);

  const onClickPlaying = useCallback(() => {
    if (state.isPlaying) {
      state.player.pauseVideo();
    } else {
      state.player.playVideo();
    }
  }, [state.player, state.isPlaying]);

  const onClickVisible = useCallback(() => {
    actions.setVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const {
          data: { items },
        } = await videoApi.getVideo(state.videoId, state.accessToken);
        setSongInfo(items[0]);
      } catch (error) {
        console.log(error);
        setError(false);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [state.videoId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>에러 발생...</div>;
  }

  return (
    <Container>
      <LeftControlBox>
        <div onClick={onClickVisible}>
          <UpIcon />
        </div>
        <div>
          <LoopIcon />
        </div>
        <div>
          <ShuffleIcon />
        </div>
        <div>
          <VolumeIcon />
        </div>
        <div>
          <VolumeController />
        </div>
      </LeftControlBox>
      <SongInfo>
        <div>
          <SongThumbnail>
            <img src={songInfo.snippet.thumbnails.medium.url} alt="미리보기 이미지" />
          </SongThumbnail>
          <SongDesc>
            <a href={`https://www.youtube.com/watch?v=${songInfo.id}`} target="_blank" rel="noreferrer">
              {songInfo.snippet.title}
            </a>
            <div>
              <span>{songInfo.snippet.channelTitle}</span>
              <span> &bull; </span>
              <span>{songInfo.snippet.publishedAt.substring(0, 4)}</span>
            </div>
          </SongDesc>
        </div>
      </SongInfo>
      <RightControlBox>
        <span>
          {state.videoCurrentTime}/{state.videoDuration}
        </span>
        <div>
          <PrevIcon />
        </div>
        <div onClick={onClickPlaying}>{state.isPlaying ? <PauseIcon /> : <PlayIconLg />}</div>
        <div>
          <NextIcon />
        </div>
      </RightControlBox>
    </Container>
  );
}

export default Player;
