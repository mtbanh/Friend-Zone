import React, { useState, useEffect } from "react";
import API from "../utils/API";
import "./Friends.css";


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
        <div className="friendImage container">
            <div className = "row">
            {friends.map(friend => {
                return (
                    <div key={friend.id} className="text-center card col-md-5 m-3 bg-secondary" style = {{opacity : ".85"}}>
                        <div className="card-img-top">
                            <img src={friend.files} style={{ width: "200px" }} alt={friend.firstName}></img>
                        </div>
                        <div className="card-body text-white">
                            <h4>{friend.firstName} {friend.lastName}</h4>
                            <button data-id={friend.firstName} onClick={createChat} className  = "btn-dark" style = {{border: "none", textDecoration: "none", width : "50%"}}>Start a chat</button>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Friends;

