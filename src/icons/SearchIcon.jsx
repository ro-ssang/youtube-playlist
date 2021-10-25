import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10px;
  margin-right: 5px;
  fill: ${(props) => props.theme.searchboxIconFill};
  width: 12px;
  height: 12px;
`;

function SearchIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"></path>
    </Svg>
  );
}

export default SearchIcon;
