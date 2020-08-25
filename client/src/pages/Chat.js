import React, { useState, useEffect, createRef } from "react";
// import ScrollToBottom from 'react-scroll-to-bottom';
import "./Chat.css";
import API from "../utils/API";
var userID = 1;

const Chat = () => {
    const [chats, setChats] = useState([])
    var [friendName, setFriendName] = useState(0);
    const [userName, setUserName] = useState(userID);
    var [transactions, setTransactions] = useState([])
    const [chatId, setChatId] = useState(0)
    const [showChat, setShowChat] = useState(false)
    const scroller = createRef();

    useEffect(() => {
        loadChats()
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
                var array = [];
                console.log(userName)
                for(var i=0; i<res.data.length; i++){
                    if(JSON.parse(res.data[i].user1) === userName){
                        array.push(res.data[i])
                    }
                    if(JSON.parse(res.data[i].user2) === userName){
                        array.push(res.data[i])
                    }
                }
                setChats(array)
            })
    };

    function handleClick() {
        API.postChat({ user1: userName, user2: 5 })
            .then(res => {
                var newChat = chats
                newChat.push(res.data)
                setChats(newChat)
                loadTransactions(res.data.id)
                window.location.reload(false);
            })
    }

    function displayChat(event) {
        event.preventDefault();
        var temp = event.target.getAttribute("data-id");
        loadTransactions(temp)
        setChatId(temp);
        setFriendName(event.target.getAttribute("data-name"))
        setShowChat(true)
        updateScroll();
        // var element = scroller.current
        // element.scrollTo(0, element.height)
    }

    function sendChatTransaction(event) {
        event.preventDefault();
        var chat = { text: event.target.children[0].value, userID: userName, ChatId: chatId }
        event.target.children[0].value = "";
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
    return (
        <div className="container backgroundImage" >
            <button onClick={handleClick}>New Chat</button>
            <div className="row">
                    <ul className="list-group col-md-4 mt-4">
                        {chats.map(chat => {
                            return (
                                    <li key={chat.id} onClick={displayChat} data-id={chat.id} data-name={chat.user2} style = {{cursor : "pointer"}}className="list-group-item bg-secondary text-white border-white">Chat with user: {chat.user2}</li>
                            )
                        })}
                    </ul>
                <div className="col-md-8 mt-4 bg-dark text-white rounded">
                    <h3 style={{ display: showChat ? "block" : "none" }} >Chat with: {friendName}</h3>
                    <h3 style = {{display: !showChat ? "inline-block" : "none", padding: "30px"}}>Click on a chat to display</h3>
                    <div style={{ height: "300px", overflow: "scroll" }}>
                        {transactions.map(tran => {
                            return (
                                    <div key={tran.id} className="card">
                                        <div className={JSON.parse(tran.userID) === userName ? "bg-info card-body" : "bg-secondary card-body"}>{tran.timeStamp}<div style={{ witdth: "100%", height: "1px", backgroundColor: "white" }}></div>{tran.text}</div>
                                    </div>
                            )
                        })}
                       <div ref = {scroller}></div>
                    </div>
                    <div className="row">
                        <form style={{ display: showChat ? "inline-block" : "none", width: "100%", padding: "20px" }} onSubmit={sendChatTransaction}>
                            <input type="text" className=" col-md-9 rounded-left" placeholder="Enter a chat" style={{ height: "38px", paddingBottom: "4px" }} />
                            <button className="bg-secondary col-md-3 btn text-white border" style={{ border: "solid 1px black", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px" }} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default Chat;