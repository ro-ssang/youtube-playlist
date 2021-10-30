import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import { formatTime } from '../utils/formatTime';

const Container = styled.div`
  position: fixed;
  top: 0px;
  right: ${(props) => props.theme.scrollbarWidth};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  ${(props) => `width: calc(100% - ${props.theme.sidebarwidth} - ${props.theme.scrollbarWidth})`};
  ${(props) => `height: calc(100vh - ${props.theme.playerBarHeight})`};
  padding: 2.875rem 3.5rem 0px;
  background: rgb(10, 10, 10);
  transform: translate3d(0px, ${(props) => (props.isVisible ? '0px' : '100vh')}, 0px);
  transition: transform 0.5s ease 0s;
  visibility: ${(props) => (props.isVisible || props.isAnimate ? 'visible' : 'hidden')};
  z-index: 10;

  iframe {
    width: 100%;
  }
`;

function Video() {
  const { state, actions } = useContext(UserContext);
  const [isAnimate, setAnimate] = useState(false);

  useEffect(() => {
    const time = 500;

    if (!state.isVisible) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, time);
    }
  }, [state.isVisible]);

  const onPlayerReady = useCallback((e) => {
    e.target.playVideo();
  }, []);

  const onPlayerStateChange = useCallback((e) => {
    const duration = e.target.getDuration();
    const { minutes, seconds } = formatTime(duration);
    actions.setVideoDuration(`${minutes}:${seconds}`);
    if (e.data === 1) {
      // 재생중
      actions.setPlaying(true);
      setInterval(() => {
        const currentTime = e.target.getCurrentTime();
        const { minutes, seconds } = formatTime(currentTime);
        actions.setVideoCurrentTime(`${minutes}:${seconds}`);
      }, 1000);
    } else if (e.data === 2) {
      // 일시정지
      actions.setPlaying(false);
    }
  }, []);

  const loadVideo = useCallback(() => {
    const player = new window.YT.Player(`youtube-player-${state.videoId}`, {
      videoId: state.videoId,
      playerVars: {
        controls: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });

    actions.setPlayer(player);
  }, [state.videoId]);

  useEffect(() => {
    if (state.player) {
      state.player.loadVideoById(state.videoId);
    }
  }, [state.videoId]);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, []);

  return (
    <Container isVisible={state.isVisible} isAnimate={isAnimate}>
      <div id={`youtube-player-${state.videoId}`}></div>
    </Container>
  );
}

export default Video;
