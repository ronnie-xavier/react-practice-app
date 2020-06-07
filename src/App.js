import React from 'react';
import './App.css';
import Home from './Components/Home';
import Redirect from './Components/Redirect';
import LinkPage from './Components/LinkPage';
import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";


function App(props) {

    return (
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <BrowserRouter>
                  <LinkPage />
                  <Switch>
                      <Route exact path="/">
                          <Redirect />
                      </Route>
                      <Route exact path="/home">
                          <Home />
                      </Route>
                  </Switch>
              </BrowserRouter>
            </header>
        </div>
      );
}

export default App;
