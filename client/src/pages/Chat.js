import React, { useState, useEffect, createRef } from "react";
// import ScrollToBottom from 'react-scroll-to-bottom';
import "./Chat.css";
import API from "../utils/API";
import LogoutBtn from "../Components/LogoutBtn"



const Chat = () => {
    let userID = JSON.parse(window.localStorage.getItem('user')).id
    let user = JSON.parse(window.localStorage.getItem('user')).name
    const [chats, setChats] = useState([])
    var [friendName, setFriendName] = useState(0);
    const [userName, setUserName] = useState(user);
    var [transactions, setTransactions] = useState([]);
    const [chatId, setChatId] = useState(0);
    const [showChat, setShowChat] = useState(false);
    const scroller = createRef();

    useEffect(() => {
        loadChats()
    }, []);

    function loadTransactions(id) {
        API.getChatsTransactionId(id)
            .then(res => {
                console.log(res.data)
                setTransactions(res.data)
            })
            .catch(err => console.log(err))
    }

    const loadChats = () => {
        API.getChats()
            .then(res => {
                var array = [];
                for(var i=0; i<res.data.length; i++){
                    if(res.data[i].user1 === userName){
                        array.push(res.data[i])
                    }
                    if(res.data[i].user2 === userName){
                        array.push(res.data[i])
                    }
                    
                }
                setChats(array)
            })
    };

    function displayChat(event) {
        event.preventDefault();
        var temp = event.target.getAttribute("data-id");
        console.log(temp)
        loadTransactions(temp)
        setChatId(temp);
        setFriendName(event.target.getAttribute("data-name"))
        setShowChat(true)
        updateScroll();
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
            .catch(err => console.log(err))
    }

    function updateScroll() {
        var element = scroller.current
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
        <LogoutBtn />
        <div className="container backgroundImage" >
            {/* <button onClick={handleClick}>New Chat</button>  */}
            <div className="row">
                    <ul className="list-group col-md-4 mt-4">
                        {chats.map((chat, i) => {
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
                                        <div className={tran.userID === userName ? "bg-info card-body" : "bg-secondary card-body"}>{tran.timeStamp}<div style={{ witdth: "100%", height: "1px", backgroundColor: "white" }}></div>{tran.text}</div>
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
        </>
    )
    
}

export default Chat;