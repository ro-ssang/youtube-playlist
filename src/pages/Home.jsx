import React, { useContext } from 'react';
import Player from '../components/Player';
import Video from '../components/Video';
import UserContext from '../contexts/UserContext';
import Layout from '../layouts/Layout';
import Main from '../layouts/Main';

function Home() {
  const { state } = useContext(UserContext);

  return (
    <Layout>
      <Main />
      {state.showing && (
        <>
          <Player />
          <Video />
        </>
      )}
    </Layout>
  );
}

export default Home;
