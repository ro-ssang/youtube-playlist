import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import GlobalTheme from './components/GlobalTheme';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalTheme>
        <GlobalStyle />
        <Router>
          <Route path="/" component={Home} exact />
        </Router>
      </GlobalTheme>
    </>
  );
}

export default App;
