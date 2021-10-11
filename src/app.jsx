import React from "react";
import "./app.module.css";
import Login from "./components/login/login";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Maker from './components/maker/maker';

function App({FileInput, authService, cardRepository}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/login","/"]} exact>
          <Login authService={authService}/>
        </Route>
        <Route path="/home">
          <Maker FileInput={FileInput} authService={authService} cardRepository={cardRepository}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
