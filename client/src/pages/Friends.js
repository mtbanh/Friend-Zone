import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Cards from "../Components/Cards";



const Friends = () => {
    let userID = JSON.parse(window.localStorage.getItem('user')).id
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        loadFriends()
    }, []);

    function loadFriends() {
        API.getProfile(userID)
            .then(res => {
                var array = [...friends]
                for (var i = 0; i < res.data.friends_list.length; i++) {
                    array.push(res.data.friends_list[i])
                    setFriends(array)
                }
            })
            .catch(err => {console.log(err)})
    }

    function createChat(event) {
        var friendId = event.target.attribute("data-id")
        var obj = {
            user1: userID,
            user2: friendId
        }
        API.postChat(obj)
            .then(res =>
                console.log(res.data)
            )
    }

    return (
        <div className="container">
            {console.log(friends)}
            {/* {friends.map(friend => {
                return (
                    <div key={friend.id} className="card col-md-6">
                        {console.log(friend)}
                        <div className="card-img-top">
                            <img src={friend.files} style={{ width: "300px" }} alt={friend.firstName}></img>
                        </div>
                        <div className="card-body">
                            <h4>{friend.firstName} {friend.lastName}</h4>
                            <p>{friend.bio}</p>
                            <button data-id={friend.id} onClick={createChat}>Start a chat</button>
                        </div>
                    </div>
                )

            })} */}
            {
          friends.map((friend, i) => (

            <Cards
              name={friend.firstName + " " +friend.lastName}
              age={friend.age}
              hobby={friend.hobby}
              bio={friend.bio}
              image={friend.files}
              id={friend.id}
            //   addBuddy={() =>addBuddy(friend)}
            
              key={i}
            />

          ))
        }
        </div>
    )
}

export default Friends;

