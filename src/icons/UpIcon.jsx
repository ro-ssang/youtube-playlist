import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';

const Svg = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transform: rotate(${(props) => (props.isVisible ? '0deg' : '180deg')});
  transition: transform 0.3s ease 0s;
`;

function UpIcon() {
  const { state } = useContext(UserContext);

  return (
    <Svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" isVisible={state.isVisible}>
      <g>
        <path d="M7 10l5 5 5-5z"></path>
      </g>
    </Svg>
  );
}

export default UpIcon;
