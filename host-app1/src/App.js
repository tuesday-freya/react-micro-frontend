import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SiteContainer from './components/site/site.component';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/:site/:productLine/:page/" component={SuspendedComponent()} />
          <Redirect from="*" to="/redbox/movies/search/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

/**
 * Uses Suspense to async render the site component that is simulating
 * a rest call to retrieve the sites configuration from a backend system.
 */
function SuspendedComponent() {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteContainer {...props} />
    </Suspense>
  );
}

export default App;