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
  getProfile: (profile) => {
    return axios.get ("api/profile", profile);
  },
  getChatsTransaction: ()=>{
    return axios.get("api/chat-transaction");
  },
  getChatsTransactionId:  (chatId) =>  {
    return axios.get("api/chat-transaction/" + chatId);
<<<<<<< HEAD
  },

  createUser: (userData)=>{
    return axios.post("/api/register", userData)
  }

=======
  }  
>>>>>>> 420bd4f8188c918e1194743e0b977c75bfbfcafc
}
