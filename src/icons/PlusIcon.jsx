import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

function PlusIcon() {
  return (
    <Svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
      <g>
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </g>
    </Svg>
  );
}

export default PlusIcon;
