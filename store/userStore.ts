import { defineStore } from 'pinia'
import type userType from '~/interface/userType'
export const useMyUserStore = defineStore('defineUser',()=>{
  const userList = ref<userType[]>(JSON.parse(localStorage.getItem('userlist')||'[]')); 

  
  const addUser = (newUser:userType)=>{
    const existUser = userList.value.find(user=> user===newUser) 
    if(!existUser){
      userList.value.push(newUser);  
      useSetItem('userlist',userList.value); 
    }
  }





  return {userList ,addUser}
})
