import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { playlistApi } from '../apis/youtubeApi';
import Loader from '../components/Loader';
import PlayItemInfo from '../components/PlayItemInfo';
import PlayItemTable from '../components/PlayItemTable';
import UserContext from '../contexts/UserContext';
import Layout from '../layouts/Layout';

const Container = styled.div`
  padding: 2.5rem;
`;

function PlaylistPage({
  location,
  location: {
    state: { pageTitle },
  },
}) {
  const [isLoading, setLoading] = useState(true);
  const [playlistItems, setPlaylistItems] = useState([]);
  const [error, setError] = useState(false);
  const { state } = useContext(UserContext);
  const { pathname } = location;
  const id = pathname.split('/')[2];

  useEffect(() => {
    async function fetchPlaylistItems() {
      try {
        if (state.accessToken) {
          const {
            data: { items },
          } = await playlistApi.getPlaylistItems(id, state.accessToken);
          setPlaylistItems(items);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaylistItems();
  }, [id, state]);

  if (isLoading) {
    return (
      <Layout>
        <Container>
          <Loader />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container>
          <div>에러 발생...</div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <PlayItemInfo playlistItems={playlistItems} pageTitle={pageTitle} />
        <PlayItemTable playlistItems={playlistItems} />
      </Container>
    </Layout>
  );
}

export default PlaylistPage;
