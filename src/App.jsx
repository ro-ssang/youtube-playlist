import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import GlobalTheme from './components/GlobalTheme';
import Player from './components/Player';
import Video from './components/Video';
import UserContext from './contexts/UserContext';
import Home from './pages/Home';
import PlaylistPage from './pages/PlaylistPage';
import SearchPage from './pages/SearchPage';

function App() {
  const { state } = useContext(UserContext);

  return (
    <>
      <GlobalTheme>
        <GlobalStyle />
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/playlist" component={PlaylistPage} />
          <Route path="/search" component={SearchPage} />
          <Route>
            {state.showing && (
              <>
                <Player />
                <Video />
              </>
            )}
          </Route>
        </Router>
      </GlobalTheme>
    </>
  );
}

export default App;
