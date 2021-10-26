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
  },
  actions: {
    setLoggedIn: () => {},
    setProfile: () => {},
    setAccessToken: () => {},
  },
});

function UserProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({ name: '', imageUrl: '' });
  const [accessToken, setAccessToken] = useState('');

  const value = {
    state: { isLoggedIn, profile, accessToken },
    actions: { setLoggedIn, setProfile, setAccessToken },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserProvider };

export default UserContext;
