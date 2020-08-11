import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Colleges from './colleges';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Colleges />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
