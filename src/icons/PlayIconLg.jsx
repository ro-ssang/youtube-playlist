import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

function PlayIconLg() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M8 5v14l11-7z"></path>
      </g>
    </Svg>
  );
}

export default PlayIconLg;
