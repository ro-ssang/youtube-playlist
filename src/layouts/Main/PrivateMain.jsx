import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { videoApi } from '../../apis/youtubeApi';
import Loader from '../../components/Loader';
import VideoItem from '../../components/VideoItem';
import UserContext from '../../contexts/UserContext';

const Container = styled.section`
  padding: 2rem 2.5rem 0px;
`;
const TitleCont = styled.div`
  h2 {
    font-size: 1.5rem;
  }
`;
const VideoList = styled.ul`
  display: flex;
  margin: 1.5rem auto 0px;
  flex-wrap: wrap;
`;

function PrivateMain() {
  const [isLoading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const { state } = useContext(UserContext);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const {
          data: { items },
        } = await videoApi.getPopular(state.accessToken);
        setVideos(items);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [state]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>에러 발생...</div>;
  }

  return (
    <Container>
      <TitleCont>
        <h2>인기 뮤직 비디오</h2>
      </TitleCont>
      <VideoList>
        {videos.length &&
          videos.map((video, index) => {
            const {
              id,
              snippet: {
                localized: { title },
                thumbnails: {
                  medium: { url: imgUrl },
                },
              },
            } = video;

            return <VideoItem key={id} id={id} number={index + 1} title={title} imgUrl={imgUrl} />;
          })}
      </VideoList>
    </Container>
  );
}

export default PrivateMain;
