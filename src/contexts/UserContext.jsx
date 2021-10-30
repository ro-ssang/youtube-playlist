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
    videoDuration: '00:00',
    videoCurrentTime: '00:00',
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
    setVideoCurrentTime: () => {},
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
  const [videoDuration, setVideoDuration] = useState('00:00');
  const [videoCurrentTime, setVideoCurrentTime] = useState('00:00');

  const value = {
    state: {
      isLoggedIn,
      profile,
      accessToken,
      showing,
      videoId,
      player,
      isVisible,
      isPlaying,
      videoDuration,
      videoCurrentTime,
    },
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
      setVideoCurrentTime,
    },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };

export default UserContext;
