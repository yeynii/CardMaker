import React from "react";
import "./app.module.css";
import Login from "./components/login/login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home/home';

function App({authService}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login","/"]} exact>
          <Login authService={authService} />
        </Route>
        <Route path="/home">
          <Home authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
