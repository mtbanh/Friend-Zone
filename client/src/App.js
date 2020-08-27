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

  // Dumpling code
  // Try to get user from local storage
  let userData = window.localStorage.getItem('user')
  if (userData) userData = JSON.parse(userData)
  else userData = {}
  const [user, setUser] = useState({ ...userData })

  // const [user, setUser] = useState({})

  useEffect(() => {
    console.log("here is the user:", user)
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
  // console.log(appRoutes())
  return (
    <UserContext.Provider value={user} >
      {console.log(user)}
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/landing"]}>
              <Landing />
            </Route>
            <>
              <Route exact path="/login">
                <Login setUser={setUser} />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              {user && Object.keys(user).length && 
                <>
                <Route exact path="/chat">
                  <Chat />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route exact path="/addFriends">
                  <AddFriends />
                </Route>
                </>
              }
              {/* {appRoutes} */}
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
