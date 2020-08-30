import React, { useState, useEffect } from "react";
import API from "../utils/API";



const Friends = () => {
    let userID = JSON.parse(window.localStorage.getItem('user')).id
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        loadFriends()
    }, []);

    function loadFriends() {
        API.getProfile(userID)
            .then(res => {
                var array = []
                for (var i = 0; i < res.data.friends_list.length; i++) {
                    API.getProfile(res.data.friends_list[i])
                        .then(friend => {
                            array.push(friend.data)
                        })
                }
                setFriends(array)
            })
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
            {friends.map(friend => {
                return (
                    <div className="card mb-3">
                        <div className="row">
                            <div key={friend.id} className="card col-md-6">
                                <div className="card-img-top">
                                    <img src={friend.files} style={{ width: "300px" }} alt={friend.firstName}></img>
                                </div>
                                <div className="card-body">
                                    <h4>{friend.firstName} {friend.lastName}</h4>
                                    <p>{friend.bio}</p>
                                    <button data-id={friend.id} onClick={createChat}>Start a chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div>
    )
}

export default Friends;

