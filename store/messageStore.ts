import { defineStore } from 'pinia'

export const useMyMessageStore = defineStore('definemessage',()=>{

   const messageList = ref<any[]>(JSON.parse(localStorage.getItem('messagelist')||'[]')); 
  
    
    const addMessage = (newmessage:any)=>{
 
        messageList.value.push(newmessage);  
        useSetItem("messagelist", JSON.stringify(messageList.value)); 
    }
  
    return { messageList,addMessage}
})
