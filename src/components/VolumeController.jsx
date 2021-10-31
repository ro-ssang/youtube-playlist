import React from 'react';
import styled from 'styled-components';

const GaugeCont = styled.div`
  padding: 1rem 0px;
  width: 100%;
`;
const GaugeWrapper = styled.div`
  position: relative;
  height: 2px;
`;
const GaugeBar = styled.div`
  position: absolute;
  top: 0px;
  height: 100%;
  background: ${(props) => props.theme.soundProgressBg};
  width: 51.5625%;
`;
const GaugeBg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgb(144, 144, 144);
  cursor: pointer;
`;
const VolumeCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 51.5625%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(129, 129, 129);
  border-radius: 50%;
  user-select: none;
`;

function VolumeController() {
  return (
    <>
      <GaugeCont>
        <GaugeWrapper>
          <GaugeBg />
          <GaugeBar />
        </GaugeWrapper>
      </GaugeCont>
      <VolumeCircle />
    </>
  );
}

export default VolumeController;
