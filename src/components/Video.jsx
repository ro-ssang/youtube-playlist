import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

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
  ${(props) => `height: calc(70vh - ${props.theme.playerBarHeight})`};
  padding: 2.875rem 3.5rem 0px;
  background: rgb(10, 10, 10);
  transform: translate3d(0px, 0px, 0px);
  transition: transform 0.3s ease 0s;
  z-index: 10;

  iframe {
    width: 100%;
  }
`;

function Video() {
  const { state, actions } = useContext(UserContext);

  const onPlayerReady = useCallback((e) => {
    e.target.playVideo();
  }, []);

  const loadVideo = useCallback(() => {
    const player = new window.YT.Player(`youtube-player-${state.videoId}`, {
      videoId: state.videoId,
      playerVars: {
        controls: 0,
      },
      events: {
        onReady: onPlayerReady,
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
    <Container>
      <div id={`youtube-player-${state.videoId}`}></div>
    </Container>
  );
}

export default Video;
