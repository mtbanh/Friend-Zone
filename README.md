# Friend-Zone

![gif demo](client\app-features.gif)

## Table of Content
- Objective
- Deploy Link
- Getting Started
- Code Highlights
- Technology
- Authors

## Objectives
Our team built Friendzone because we wanted a friend app that allow users to match up with those who share their hobbies and create connections during this pandemic. 

## Deploy Link

[FriendZone](https://ucb-mern-friendzone.herokuapp.com/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
$ git clone at https://github.com/mtbanh/Friend-Zone
mtbanh/Friendzone.git
$ cd mtbanh/Friendzone.git

```
Then open in your preferred text editor:
- [vim](https://www.vim.org/) 
- [emmacs](https://www.gnu.org/software/emacs/)
- [visual studio code](https://code.visualstudio.com/) 

## Code Highlight
Database code snippet
The code below highlight the format that the Sequelize library use to store information. We created tables for the user credentials, user profile, and the chat history that are initiate between two users. This particular snippet allows us to store what the specific user has type so that we can retrieve it to display.

```js
module.exports = function (sequelize, DataTypes) {
    var ChatTransaction = sequelize.define("ChatTransaction", {
        text: DataTypes.STRING,
        userID: DataTypes.STRING,
        timeStamp: {
            type: DataTypes.STRING,
            defaultValue: moment().format("LLLL")
        }
    })
    ChatTransaction.associate = function (models) {
        ChatTransaction.belongsTo(models.Chat, { foreignKey: {allowNull:false}})
    }
```
Private and Public Route
This is a short snippet of code that we used to define who are allow to see what content. React context allow us to provide the verified user information to the sites that are defined as private and React will display the page; otherwise, the unverified user may only see the home page. 
```js
 <UserContext.Provider value={user} >
      {console.log(user)}
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={"/"}>
              <Landing />
            </Route>
              {user && Object.keys(user).length && 
                <>
                <Route exact path="/profile">
                  <Profile />
                </Route>
               
                </>
              }
            </>
```



## Technology
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScrip)
* [Node.js](https://node.js.org/)
* [Sequelize](https://sequelize.org/)
* [mySQL]()
* [HTML](https://en.wikipedia.org/wiki/HTML5)
* [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
* [Express](https://expressjs.com/)
* [Passport](http://www.passportjs.org/)
* [React]()
* [FileStack]()



## Authors 
### Aidan
- [Github](https://github.com/aidansweeny)
- [LinkedIn](https://www.linkedin.com/in/aidan-sweeny-81075030/)

### Mai
- [Github](https://github.com/mtbanh)
- [LinkedIn](https://www.linkedin.com/in/banhtmai/)


### Isaias
- [Github](https://github.com/idelmundo)
- [LinkedIn](https://www.linkedin.com/in/isaiasdelmundo/)


### Joe
- [Github](https://github.com/jdavis3333)
- [LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)
