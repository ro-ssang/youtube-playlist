import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

function NextIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
      </g>
    </Svg>
  );
}

export default NextIcon;
