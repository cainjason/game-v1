import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import styled from 'styled-components'
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  {/*ReactPlayer*/}
                </Route>
              </Switch>
            </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div``;