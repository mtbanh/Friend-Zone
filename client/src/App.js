import React, { useEffect, useState, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom"
import Nav from "./Components/Navbar"
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import Home from "./pages/Home";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import AddFriends from "./pages/AddFriends";
import UserContext from "./utils/UserContext/userContext"


function App() {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    console.log(user)
  }, [user]);

  // function isLoggedIn (){
  //   console.log(user)
  //   if(user !== null){
  //     return true
  //   }
  // };

  function appRoutes() {
   return user ?
      <>
        <Route exact path="/chat">
          <Chat />
        </Route>
        
        <Route exact path="/addFriends">
          <AddFriends />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </>
   :
      <>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </>
   
  }
  console.log(appRoutes())
  return (
    <UserContext.Provider value={{ user, setUser }} >
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/landing"]}>
            <Landing />
          </Route>
          <>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/chat">
            <Chat />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* {appRoutes()} */}
          </>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}


export default App;

  // const PrivateRoute = ({component: Component,...rest}) =>{
  //   return (
  //     <Route {...rest} render={props =>{
  //       isLoggedIn() ? 
  //       <Component {...props} /> 
  //       :
  //       <Redirect to="/signin" />
  //     }}
  //     />
  //   )
  // }

  // const PublicRoute = ({component: Component, restricted, ...rest}) =>{
  //   return(
  //     <Route {...rest} render ={props =>(
  //       isLoggedIn() && restricted ?
  //         <Redirect to="/profile" />
  //         :
  //         <Component {...props} />
  //     )} 
  //     />
  //   )
  // }
