import React, { useState, useEffect } from "react";
import API from "../utils/API";


const Chat = () => {
    const [chats, setChats] = useState([])
    var [userName, setUserName] = useState([]);
    var [transactions, setTransactions] = useState([])

    useEffect(() => { 
        loadTransactions()
        if (!loadChats()) { console.log("Nothing to see here") } 
    }, []);

    function loadTransactions(){
        API.getChatsTransaction()
        .then(res => {
            setTransactions(res.data)
        })
    }

    const loadChats = () => {
        API.getChats()
            .then(res => {
                setChats(res.data)
            })
    };
    function handleClick() {
        API.postChat({ user1: 1, user2: 3 })
            .then(res => {
                var newChat = chats
                newChat.push(res.data)
                setChats(newChat)
                API.postChatTransaction({text: "Stuff", userID: 1, ChatId: res.data.id})
                    .then(res => {
                        console.log(res.data)
                    })
                window.location.reload(false);
            })
    }

    function displayChat(event) {
        setUserName(event.target.getAttribute("data-name"))
    }

    return (
        <div className="container">
            <button onClick={handleClick}>New Chat</button>
            <div className="row">
                <ul className="list-group col-md-3">
                    {chats.map(chat => {
                        return (
                            <li key={chat.id} onClick={displayChat} data-name = {chat.user1} className="list-group-item">Chat with user: {chat.user1}</li>
                        )
                    })}
                </ul>
                <div className = "row col-md-8">
                    <h3>Chat with: {userName}</h3>
                    <input type="text" className="form-control" placeholder="Enter a chat" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                </div>
            </div>
        </div>
    )
}
export default Chat;