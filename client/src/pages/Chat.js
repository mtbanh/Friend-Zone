import React, { useState, useEffect, createRef } from "react";
import API from "../utils/API";

const Chat = () => {
    const [chats, setChats] = useState([])
    var [friendName, setFriendName] = useState(0);
    const [userName, setUserName] = useState(0);
    var [transactions, setTransactions] = useState([])
    const [chatId, setChatId] = useState(0)
    const [showChat, setShowChat] = useState(false)
    const scroller = createRef();
    useEffect(() => {
        updateScroll()
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
        updateScroll()
        var temp = event.target.getAttribute("data-id");
        loadTransactions(temp)
        setChatId(temp);
        setFriendName(event.target.getAttribute("data-name"))
        setShowChat(true)
        updateScroll()
    }

    function sendChatTransaction(event) {
        event.preventDefault();
        var chat = { text: event.target.children[0].value, userID: userName, ChatId: chatId }
        API.postChatTransaction(chat)
            .then(res => {
                var newTran = [...transactions]
                newTran.push(res.data)
                setTransactions(newTran)
            })
    }

    function updateScroll() {
        var element = scroller.current
        element.scrollIntoView({ behavior: 'smooth' })
    }

    function formatDate(date) {
        var string = "";
        date = JSON.stringify(date)
        for (var i = 0; i < date.length; i++) {
            if (i === 5) {
                string += "-";
            }
            if (i === 7) {
                string += "-";
            }
            string += date[i];
        }
        return string;
    }

    return (
        <div className="container">
            <button onClick={handleClick}>New Chat</button>
            <div className="row">
                <ul className="list-group col-md-4">
                    {chats.map(chat => {
                        return (
                            <li key={chat.id} onClick={displayChat} data-id={chat.id} data-name={chat.user2} className="list-group-item">Chat with user: {chat.user2}</li>
                        )
                    })}
                </ul>
                <div className="col-md-8">
                    <h3 style={{ display: showChat ? "block" : "none" }} >Chat with: {friendName}</h3>
                    <div ref={scroller} style={{ height: "300px", overflow: "scroll" }}>
                        {transactions.map(tran => {
                            return (

                                <div key={tran.id} className="card">
                                    <div className={tran.userID === userName ? "bg-info card-body" : "bg-secondary card-body"}>{JSON.parse(formatDate(tran.timeStamp))}<div style={{ witdth: "100%", height: "1px", backgroundColor: "black" }}></div>{tran.text}</div>
                                </div>
                            )
                        })}
                       
                    </div>
                    <div className="row">
                        <form style={{ display: showChat ? "inline-block" : "none", width: "100%", padding: "20px" }} onSubmit={sendChatTransaction}>
                            <input type="text" className=" col-md-9" placeholder="Enter a chat" style={{ height: "38px", paddingBottom: "4px" }} />
                            <button className=" col-md-3 btn" style={{ border: "solid 1px black", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat;