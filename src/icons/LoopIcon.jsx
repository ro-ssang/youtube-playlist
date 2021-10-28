import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

function LoopIcon() {
  return (
    <Svg viewBox="0 0 24 24">
      <g>
        <path d="M3 6.929c0-.75.643-1.393 1.393-1.393h14.286L16.32 3.179 17.5 2l4.393 4.393-4.393 4.393-1.179-1.179L18.68 7.25H4.714V11H3V6.929zM2.107 17.607L6.5 13.214l1.179 1.179L5.32 16.75l13.965-.071v-3.965H21V17c0 .75-.643 1.393-1.393 1.393l-14.286.071 2.358 2.357L6.5 22l-4.393-4.393z"></path>
      </g>
    </Svg>
  );
}

export default LoopIcon;
