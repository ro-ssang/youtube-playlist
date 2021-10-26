import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import PrivateMain from './PrivateMain';
import PublicMain from './PublicMain';

function Main() {
  const { state } = useContext(UserContext);

  return !state.isLoggedIn ? <PublicMain /> : <PrivateMain />;
}

export default Main;
