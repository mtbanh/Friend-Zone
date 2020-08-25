// import React,{useState, useEffect} from "react";
// import API from "../utils/API";


// const Friends = () => {
//     const[friends, setFriends] = useState([]);

//     useEffect(() => {
//         loadFriends()
//     }, []);

//     function loadFriends(){
//         API.getProfile(id)
//             .then(res => {
//                 setFriends(res.data.friends);
//             })
//     }

//     function loadProfile(friend){
//         API.getProfile(friend)
//             .then(res => {
//                 return res.data;
//             })
//     }

//     function createChat(event){
//         var friendId = event.target.attribute("data-id")
//         obj = {
//             user1: id,
//             user2: friendId
//         }
//         API.postChat(obj)
//             .then(res =>
//                 console.log(res.data)
//                 )
//     }

//     return (
//         <div>
//             {friends.map(friend => {
//                 var info = loadProfile(friend);
//                 return(
//                     <div>
//                         <h1>{info.name}</h1>
//                         <button data-id = {info.UserId} onClick = {createChat()}>Start a chat</button>
//                     </div>
//                 )   
//             })}
//         </div>
//     )
// }

// export default Friends;