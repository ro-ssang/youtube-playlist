import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

function TrashCan() {
  return (
    <Svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" fill="currentColor">
      <g>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
      </g>
    </Svg>
  );
}

export default TrashCan;
