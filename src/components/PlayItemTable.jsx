import React from 'react';
import styled from 'styled-components';
import EllipsisIcon from '../icons/EllipsisIcon';
import PlayIcon from '../icons/PlayIcon';

const Song = styled.td`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 0.375rem;
  height: 54px;

  div:first-child {
    position: relative;
    width: 40px;
    height: 40px;
    margin-right: 1.25rem;
    cursor: pointer;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 3px;
    }

    & > div {
      position: absolute;
      top: 0px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.45);
      opacity: 0;
    }
  }

  div:nth-child(2) {
    min-width: 0px;

    h2 {
      font-size: 13px;
      font-weight: 400;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${(props) => props.theme.systemPrimary};
      padding-right: 10 px;
    }
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0px;
  table-layout: fixed;

  th {
    font-size: 0.75rem;
    color: ${(props) => props.theme.systemSecondary};
    font-weight: normal;
    text-align: left;
    padding-bottom: 0.375rem;

    &:first-child {
      padding-left: 0.375rem;
      width: 40%;
    }
    &:nth-child(2) {
      position: relative;
      width: 20%;
    }
    &:nth-child(3) {
      position: relative;
      width: 30%;
    }
    &:nth-child(4) {
      position: relative;
      width: 10%;
    }
    &:not(:first-child)::before {
      content: '';
      position: absolute;
      left: -15px;
      top: calc(50% - 3px);
      height: 16px;
      width: 1px;
      border-radius: 0.5px;
      background: ${(props) => props.theme.systemSecondary};
      transform: translateY(-50%);
    }
  }

  tbody {
    font-size: 0.8125rem;
    font-weight: normal;
    color: ${(props) => props.theme.systemSecondary};

    tr {
      height: 54px;

      &:nth-child(odd) {
        background: ${(props) => props.theme.musicItemEvenBg};
      }

      &:hover {
        background: ${(props) => props.theme.tracklistHoverBg};

        ${Song} {
          & > div > div {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Album = styled.td``;
const Artist = styled.td``;
const Time = styled.td`
  border-radius: 0px 5px 5px 0px;
  padding-right: 18px;

  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

function Row({ title, imgUrl, artist }) {
  return (
    <tr>
      <Song>
        <div>
          <img src={imgUrl} alt={title} />
          <div>
            <PlayIcon />
          </div>
        </div>
        <div>
          <h2>{title}</h2>
        </div>
      </Song>
      <Album></Album>
      <Artist>
        <div>{artist}</div>
      </Artist>
      <Time>
        <div>
          4:02
          <EllipsisIcon />
        </div>
      </Time>
    </tr>
  );
}

function PlayItemTable({ playlistItems }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>노래</th>
          <th>앨범</th>
          <th>아티스트</th>
          <th>시간</th>
        </tr>
      </thead>
      <tbody>
        {playlistItems.length > 0 &&
          playlistItems.map((item) => {
            const {
              id,
              snippet: {
                title,
                thumbnails: {
                  medium: { url: imgUrl },
                },
                videoOwnerChannelTitle: artist,
              },
            } = item;
            return <Row key={id} title={title} imgUrl={imgUrl} artist={artist} />;
          })}
      </tbody>
    </Table>
  );
}

export default PlayItemTable;
