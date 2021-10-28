import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

function PauseIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
      </g>
    </Svg>
  );
}

export default PauseIcon;
