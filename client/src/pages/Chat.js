import React, { useState, useEffect } from "react";
import API from "../utils/API";


const Chat = () => {
    const [chats, setChats] = useState([])
    var [friendName, setFriendName] = useState(0);
    const [userName, setUserName] = useState(0);
    var [transactions, setTransactions] = useState([])
    const [chatId, setChatId] = useState(0)
    const [showChat, setShowChat] = useState(false)

    useEffect(() => {
        if (!loadChats()) { console.log("Nothing to see here") }
        setUserName(1)
    }, []);

    function loadTransactions(id) {
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
        API.postChat({ user1: userName, user2: 4 })
            .then(res => {
                var newChat = chats
                newChat.push(res.data)
                setChats(newChat)
                loadTransactions(res.data.id)
                window.location.reload(false);
            })
    }

    function displayChat(event) {
        var temp = event.target.getAttribute("data-id");
        loadTransactions(temp)
        setChatId(temp);
        setFriendName(event.target.getAttribute("data-name"))
        setShowChat(true)
    }

    function sendChatTransaction(event) {
        event.preventDefault();
        var chat = {text: event.target.children[0].value,  userID: userName, ChatId: chatId}
        API.postChatTransaction(chat)
            .then(res => {
                var newTran = transactions
                newTran.push(res.data)
                setTransactions(newTran)
                window.location.reload(false);
            })
    }

    return (
        <div className="container">
            <button onClick={handleClick}>New Chat</button>
            <div className="row">
                <ul className="list-group col-md-3">
                    {chats.map(chat => {
                        return (
                            <li key={chat.id} onClick={displayChat} data-id={chat.id} data-name={chat.user2} className="list-group-item">Chat with user: {chat.user2}</li>
                        )
                    })}
                </ul>
                <div className="row">
                    <h3 style={{ display: showChat ? "block" : "none" }} className = "col-md-12">Chat with: {friendName}</h3>
                    <div className="col-md-8" style = {{height: "300px", overflow: "scroll"}}>
                    {transactions.map(tran => {
                        {
                            if(tran.userID == userName){
                            return (
                                <div className = "card">
                                    <div className = 'bg-info card-body'  key={tran.id}>{tran.text}</div>
                                </div>
                            )
                        }
                        else{
                            return (
                                <div className = "card">
                                    <div className = 'bg-secondary card-body'  key={tran.id}>{tran.text}</div>
                                </div>
                            )
                        }}
                        
                    })}
                    </div>
                    <form style={{ display: showChat ? "block" : "none" }} onSubmit = {sendChatTransaction}>
                        <input type="text" className="form-control" placeholder="Enter a chat"></input>
                        <button className="btn btn-outline-secondary" type="submit">Send</button>
                    </form>
                    </div>
                </div>
        </div>
    )
}
export default Chat;