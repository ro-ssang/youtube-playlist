import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const youtube = axios.create({
  baseURL: BASE_URL,
});

export const videoApi = {
  getPopular: (token) =>
    youtube.get('/videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'KR',
        videoCategoryId: 10,
        access_token: token,
      },
    }),
};
