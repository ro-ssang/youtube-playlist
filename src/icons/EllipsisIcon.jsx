import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgb(250, 88, 106);
  margin-left: 16px;
  cursor: pointer;
`;

function EllipsisIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      data-id="UExuVVJrWWVlRWtpS0pqREthcG5SeExWZXNuaUtNWUdRbS41NkI0NEY2RDEwNTU3Q0M2"
    >
      <path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"></path>
    </Svg>
  );
}

export default EllipsisIcon;
