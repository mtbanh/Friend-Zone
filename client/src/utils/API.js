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
<<<<<<< HEAD
  getChatsTransaction: (chatTran)=>{
    return axios.get("api/chat-transaction", chatTran);
  },
=======
  getChatsTransaction: ()=>{
    return axios.get("api/chat-transaction");
  },
  getChatsTransactionId:  (chatId) =>  {
    return axios.get("api/chat-transaction/" + chatId);
  }
>>>>>>> 1d553de6f04e261cb50dd3a65ba29ec9e301f2ee

  postUser: (user)=>{
    return axios.get("api/signup", user)
  }
}
