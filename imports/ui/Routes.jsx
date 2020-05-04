import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Players} from "./pages/Players";
import { Login } from 'meteor/cereal:ui/pages/Login'

export class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path={"/"}>
          <Players />
        </Route>
        <Route exact path={"/login"}>
          <Login includeRegistration={false} />
        </Route>
      </Switch>
    )
  }
}