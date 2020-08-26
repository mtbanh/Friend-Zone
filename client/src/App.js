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
  const [user, setUser] = useState()
  
  useEffect(() => {
    console.log(user)
  }, [user]);

  const isLoggedIn = ()=>{
    console.log(user)
    if(user !== null){
      return true
    }
  };

  const PrivateRoute = ({component: Component,...rest}) =>{
    return (
      <Route {...rest} render={props =>{
        isLoggedIn() ? 
        <Component {...props} /> 
        :
        <Redirect to="/signin" />
      }}
      />
    )
  }

  const PublicRoute = ({component: Component, restricted, ...rest}) =>{
    return(
      <Route {...rest} render ={props =>(
        isLoggedIn() && restricted ?
          <Redirect to="/profile" />
          :
          <Component {...props}
      )} 
      />
    )
  }
  // function appRoutes() {
  //   if(user) return true ?
  //     <>
  //       <Route exact path="/chat">
  //         <Chat />
  //       </Route>
  //       {/* <Route exact path="/friends">
  //           <Friends />
  //         </Route> */}
  //       <Route exact path="/addFriends">
  //         <AddFriends />
  //       </Route>
  //       <Route exact path={["/Profile"]}>
  //         <Profile />
  //       </Route>
  //     </>
  //     :
  //     <>
  //       <Route exact path="/login">
  //         <Login />
  //       </Route>
  //       <Route exact path="/register">
  //         <Register />
  //       </Route>
  //     </>

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <Router>
        <div>
          <Nav />
          <Switch>
            <PublicRoute restricted={false} component={Landing} path="/" exact />
            <PublicRoute restricted={true} component={Login, Register} />
            <PrivateRoute component= {Profile, Chat, Friends,}
            {/* <Route exact path={["/", "/landing"]}>
              <Landing />
            </Route>
            {appRoutes()} */}
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
