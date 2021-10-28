import React, { createContext, useState } from 'react';

const PlayerContext = createContext({
  state: {
    videoId: '',
    showing: false,
  },
  actions: {
    setVideoId: () => {},
    setShowing: () => {},
    onClick: () => {},
  },
});

function PlayerProvider({ children }) {
  const [videoId, setVideoId] = useState('');
  const [showing, setShowing] = useState(false);

  const value = {
    state: { videoId, showing },
    actions: { setVideoId, setShowing },
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export { PlayerProvider };

export default PlayerContext;
