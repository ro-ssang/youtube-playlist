import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { playlistApi } from '../apis/youtubeApi';
import UserContext from '../contexts/UserContext';
import PlusIcon from '../icons/PlusIcon';
import Loader from './Loader';

const Title = styled.div`
  font-size: 0.625rem;
  line-height: 1.3;
  margin-top: 1.375rem;
  margin-bottom: 0.25rem;
  opacity: 0.5;
`;
const AddPlayItem = styled.li`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 6px;
  padding: 0.25rem;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    opacity: 0.5;
  }
`;
const PlayItem = styled.li`
  border-radius: 6px;

  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.25rem;
    width: 100%;

    &::before {
      content: '';
      display: inline-block;
      width: 24px;
      height: 24px;
      margin-right: 0.5rem;
      background-image: url('https://music.apple.com/assets/web-nav/sidebar_GenericPlaylist.svg');
      background-repeat: no-repeat;
      opacity: 0.5;
    }

    span {
      flex: 1 1 0%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

function Playlist() {
  const [isLoading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState([]);
  const [error, setError] = useState(false);
  const { state } = useContext(UserContext);

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const {
          data: { items },
        } = await playlistApi.getUserPlaylist(state.accessToken);
        setPlaylist(items);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaylist();
  }, [state]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>에러 발생...</div>;
  }

  return (
    <>
      <Title>플레이리스트</Title>
      <ul>
        <AddPlayItem>
          <PlusIcon />새 재생목록
        </AddPlayItem>
        {playlist.length > 0 &&
          playlist.map((item) => {
            const {
              id,
              snippet: { title },
            } = item;
            return (
              <PlayItem key={id}>
                <Link
                  to={{
                    pathname: `/playlist/${id}`,
                    state: {
                      pageTitle: title,
                    },
                  }}
                >
                  <span>{title}</span>
                </Link>
              </PlayItem>
            );
          })}
      </ul>
    </>
  );
}

export default Playlist;
