import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <p>This is the homepage</p>
          </Route>

          <Route path="/create" component={CreateRoomPage} />
          <Route path="/join" component={RoomJoinPage} />
        </Switch>
      </Router>
    );
  }
}
