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
  getChatsTransaction: ()=>{
    return axios.get("api/chat-transaction");
  },
  getChatsTransactionId:  (chatId) =>  {
    return axios.get("api/chat-transaction/" + chatId);
  }  
}
