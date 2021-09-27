import React from "react";
import "./app.module.css";
import Login from "./components/login/login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({authService}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login","/"]} exact>
          <Login authService={authService} />
        </Route>
        <Route path="/home">
          <Maker authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
