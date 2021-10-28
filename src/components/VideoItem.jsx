import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';
import AddListIcon from '../icons/AddListIcon';

const Container = styled.li`
  position: relative;
  width: calc(25% - 1rem);
  margin: 0px 0.5rem 2.5rem;
  cursor: pointer;
`;
const ImageCont = styled.div`
  img {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
  }
`;
const InfoCont = styled.div`
  display: flex;
  margin: 0.75rem 2rem 0.25rem 0px;
`;
const InfoNumber = styled.div`
  display: flex;
  color: ${(props) => props.theme.systemSecondary};
  margin-right: 0.5rem;

  span:nth-child(2) {
    margin-left: 0.5rem;
  }
`;
const InfoTitle = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1 1 0%;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 20px;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${(props) => props.theme.systemPrimary};
`;
const IconCont = styled.div`
  position: absolute;
  right: 0px;
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.systemPrimary};
  margin-left: auto;
  z-index: 2;
`;

function VideoItem({ id, number, title, imgUrl }) {
  const { actions } = useContext(UserContext);

  const onClick = () => {
    actions.setShowing(true);
    actions.setVideoId(id);
  };

  return (
    <Container onClick={onClick}>
      <ImageCont>
        <img src={imgUrl} alt={title} />
      </ImageCont>
      <InfoCont>
        <InfoNumber>
          <span>{number}</span>
          <span>-</span>
        </InfoNumber>
        <InfoTitle>{title}</InfoTitle>
        <IconCont>
          <AddListIcon />
        </IconCont>
      </InfoCont>
    </Container>
  );
}

export default VideoItem;
