import React, { useState, useEffect } from "react";
import API from "../utils/API";

const Friends = () => {
    let userID = JSON.parse(window.localStorage.getItem('user')).id
    let userName = JSON.parse(window.localStorage.getItem('user')).name
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
                }
                setFriends(array)
            })
            .catch(err => {console.log(err)})
    }

    function createChat(event) {
        console.log(event.target)
        var friendId = event.target.getAttribute("data-id")
        var obj = {
            user1: userName,
            user2: friendId
        }
        API.postChat(obj)
            .then(res =>
                window.location.replace("/chat")
            )
    }

    return (
        <div className="container row">
            {friends.map(friend => {
                return (
                    <div key={friend.id} className="card col-md-6">
                        <div className="card-img-top">
                            <img src={friend.files} style={{ width: "200px" }} alt={friend.firstName}></img>
                        </div>
                        <div className="card-body">
                            <h4>{friend.firstName} {friend.lastName}</h4>
                            <button data-id={friend.firstName} onClick={createChat}>Start a chat</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends;

