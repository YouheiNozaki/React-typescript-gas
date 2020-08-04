import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { theme } from './theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
