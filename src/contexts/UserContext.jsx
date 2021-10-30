import React, { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext({
  state: {
    isLoggedIn: false,
    accessToken: '',
    profile: {
      name: '',
      imageUrl: '',
    },
    showing: false,
    videoId: '',
    player: null,
    isVisible: false,
    isPlaying: false,
    videoDuration: '0:00',
  },
  actions: {
    setLoggedIn: () => {},
    setProfile: () => {},
    setAccessToken: () => {},
    setShowing: () => {},
    setVideoId: () => {},
    setPlayer: () => {},
    setVisible: () => {},
    setPlaying: () => {},
    setVideoDuration: () => {},
  },
});

function UserProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({ name: '', imageUrl: '' });
  const [accessToken, setAccessToken] = useState('');
  const [showing, setShowing] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [player, setPlayer] = useState(null);
  const [isVisible, setVisible] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [videoDuration, setVideoDuration] = useState('0:00');

  const value = {
    state: { isLoggedIn, profile, accessToken, showing, videoId, player, isVisible, isPlaying, videoDuration },
    actions: {
      setLoggedIn,
      setProfile,
      setAccessToken,
      setShowing,
      setVideoId,
      setPlayer,
      setVisible,
      setPlaying,
      setVideoDuration,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };

export default UserContext;
