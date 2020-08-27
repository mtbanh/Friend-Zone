import React,{useState, useEffect} from "react";
import API from "../utils/API";

let userData = window.localStorage.getItem('user')
var userID = userData.id;

const Friends = () => {
    const[friends, setFriends] = useState([]);

    useEffect(() => {
        loadFriends()
    }, []);

    function loadFriends(){
        API.getProfile(userID)
            .then(res => {
                setFriends(res.data.friends);
            })
    }

    function loadProfile(friend){
        API.getProfile(friend)
            .then(res => {
                return res.data;
            })
    }

    function createChat(event){
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
        <div>
            {friends.map(friend => {
                var info = loadProfile(friend);
                return(
                    <div>
                        <h1>{info.name}</h1>
                        <button data-id = {info.UserId} onClick = {createChat()}>Start a chat</button>
                    </div>
                )   
            })}
        </div>
    )
}

export default Friends;