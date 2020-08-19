import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Navbar"
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/landing"]}>
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          <Route exact path="/chat">
            <Chat />
          </Route>
          {/* <Route exact path="/friends">
            <Friends />
          </Route> */}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
