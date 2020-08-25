import axios from "axios";
export default {
  postChat: (chat)=>{
    return axios.post("api/chat", chat);
  },
  getChats: ()=>{
    return axios.get("api/chat");
  },
  getChatId: (id) => {
    return axios.get("api/chat/" + id)
  },
  postChatTransaction: (chatTran)=>{
    return axios.post("api/chat-transaction", chatTran);
  },
  getChatsTransaction: (chatTran)=>{
    return axios.get("api/chat-transaction", chatTran);
  },
  // Profile
  postProfile: (profile) => {
    return axios.post ("api/profile", profile);
  },
  getProfiles: () => {
    return axios.get ("api/profile/");
  },
  getProfile: (id) => {
    return axios.get ("api/profile/"+id);
  },
  getChatsTransaction: ()=>{
    return axios.get("api/chat-transaction");
  },
  getChatsTransactionId:  (chatId) =>  {
    return axios.get("api/chat-transaction/" + chatId);
  },

  createUser: (userData)=>{
    console.log(userData)
    return axios.post("api/register", userData)
  },

  findUser:  ({email, password}) =>{
    console.log(email,password)
    return axios.post("/api/login", {email, password})
  },

  getUserData: ()=>{
    return axios.get("")
  }
}
