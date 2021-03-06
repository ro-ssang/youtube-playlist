import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.themeBackgroundColor};
    color: ${(props) => props.theme.systemPrimary};
    font-family: -apple-system, BlinkMacSystemFont, "Apple Color Emoji", "SF Pro", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /* a 태그 초기화 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 불릿기호 초기화 */
  ul, li {
    list-style: none;
  }

  /* 버튼 초기화 */
  button {
    outline: none;
    border: none;
  }
`;

export default GlobalStyle;
