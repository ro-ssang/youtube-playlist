import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import GlobalTheme from './components/GlobalTheme';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';
import PlaylistPage from './pages/PlaylistPage';

function App() {
  return (
    <>
      <GlobalTheme>
        <GlobalStyle />
        <UserProvider>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/playlist" component={PlaylistPage} />
          </Router>
        </UserProvider>
      </GlobalTheme>
    </>
  );
}

export default App;
