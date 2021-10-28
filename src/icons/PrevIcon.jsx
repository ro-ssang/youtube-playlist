import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

function PrevIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
      </g>
    </Svg>
  );
}

export default PrevIcon;
