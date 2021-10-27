import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: rgb(255, 255, 255);
  width: 24px;
  height: 24px;
`;

function PlayIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M8 5v14l11-7z"></path>
      </g>
    </Svg>
  );
}

export default PlayIcon;
