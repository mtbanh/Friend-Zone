import React, { useState, useEffect } from "react";
import API from "../utils/API";


const Chat = () => {
    const [chats, setChats] = useState([])
    var [userName, setUserName] = useState([]);
    var [transactions, setTransactions] = useState([])

    useEffect(() => { 
        if (!loadChats()) { console.log("Nothing to see here") } 
    }, []);

    function loadTransactions(id){
        API.getChatsTransactionId(id)
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
        API.postChat({ user1: 1, user2: 4 })
            .then(res => {
                var newChat = chats
                newChat.push(res.data)
                setChats(newChat)
                loadTransactions(res.data.id)
                API.postChatTransaction({text: "new stuff", userID: 1, ChatId: res.data.id})
                    .then(res => {
                        var newTran = transactions
                        newTran.push(res.data)
                        setTransactions(newTran)
                    })
                window.location.reload(false);
            })
    }

    function displayChat(event) {
        var temp = event.target.getAttribute("data-id");
        loadTransactions(temp)
        setUserName(event.target.getAttribute("data-name"))
    }

    return (
        <div className="container">
            <button onClick={handleClick}>New Chat</button>
            <div className="row">
                <ul className="list-group col-md-3">
                    {chats.map(chat => {
                        return (
                            <li key={chat.id} onClick={displayChat} data-id  = {chat.id} data-name = {chat.user2} className="list-group-item">Chat with user: {chat.user2}</li>
                        )
                    })}
                </ul>
                <div className = "row col-md-8">
                    <h3>Chat with: {userName}</h3>
                    {transactions.map(tran => {
                        return(
                            <div>
                                <br></br>
                                <p key = {tran.id}>{tran.text}</p>
                            </div>
                        )
                    })}
                    <input type="text" className="form-control" placeholder="Enter a chat" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                </div>
            </div>
        </div>
    )
}
export default Chat;