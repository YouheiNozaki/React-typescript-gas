import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';

export function App() {
  return (
    <div>
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
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
