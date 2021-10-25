import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colorScheme: 'light dark',
  red: '#ff453a',
  themeColor: '#000',
  systemPrimary: 'rgba(0,0,0,0.85)',
  systemSecondary: 'rgba(0,0,0,0.5)',
  sidebarBg: 'rgba(60,60,67,0.03)',
  sidebarBorderColor: 'rgba(0,0,0,0.1)',
  sidebarwidth: '260px',
  sidebarSelectedBg: 'rgba(60,60,67,0.1)',
  divider: 'rgba(0,0,0,0.15)',
  playerBarHeight: '72px',
  themeBackgroundColor: 'transparent',
  searchboxBorderColor: '#ccc',
  searchboxBackground: '#fff',
  searchboxIconFill: 'rgba(0,0,0,0.65)',
  searchboxTextColor: '#111',
  profileboxBackground: 'rgba(60,60,67,0.03)',
  playerBg: 'rgba(255,255,255,1)',
  playlistShadowColor: 'rgba(0,0,0,0.1)',
  soundProgressBg: '#f00',
  musicItemEvenBg: 'rgba(0,0,0,0.02)',
  playlistItemBg: 'rgba(255,255,255,0.05)',
  tracklistHoverBg: 'rgba(0,0,0,0.06)',
  googleBtnColor: '#fff',
  scrollbarWidth: '15px',
};

function GlobalTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default GlobalTheme;
