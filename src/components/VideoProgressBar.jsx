import React from 'react';
import styled from 'styled-components';

const ProgressBarCont = styled.div`
  padding: 1rem 0px;
`;
export const ProgressBarWrapper = styled.div`
  position: relative;
  height: 2px;
`;
const ProgressBg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgb(144, 144, 144);
  cursor: pointer;
`;
const ProgressBar = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  background-color: rgb(255, 0, 0);
  width: 1.44068%;
`;
export const DotCont = styled.div`
  position: absolute;
  top: 0px;
  left: 1.44068%;
  display: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 34px;
  height: 100%;
  transform: translateX(-50%);
`;
const DotButton = styled.div`
  width: 14px;
  height: 14px;
  background: rgb(255, 0, 0);
  border-radius: 50%;
`;

function VideoProgressBar() {
  return (
    <>
      <ProgressBarCont>
        <ProgressBarWrapper>
          <ProgressBg />
          <ProgressBar />
        </ProgressBarWrapper>
      </ProgressBarCont>
      <DotCont>
        <DotButton />
      </DotCont>
    </>
  );
}

export default VideoProgressBar;
