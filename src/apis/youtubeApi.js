import axios from 'axios';

const VIDEO_URL = 'https://www.googleapis.com/youtube/v3';

const instance = axios.create({
  baseURL: VIDEO_URL,
});

export const videoApi = {
  getPopular: (token) =>
    instance.get('/videos', {
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

export const playlistApi = {
  getUserPlaylist: (token) =>
    instance.get('/playlists', {
      params: {
        part: 'snippet',
        maxResults: 50,
        mine: true,
        access_token: token,
      },
    }),
  getPlaylistItems: (id, token) =>
    instance.get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: id,
        access_token: token,
      },
    }),
};
