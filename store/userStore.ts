import { defineStore } from 'pinia'
import type userType from '~/interface/userType'
export const useMyUserStore = defineStore('defineUser',()=>{
  const userList = ref<userType[]>(JSON.parse(localStorage.getItem('userlist')||'[]')); 

  
  const addUser = (newUser:userType)=>{
    const existUser = userList.value.find(user=> user.name===newUser.name) 
    if(!existUser){
      userList.value.push(newUser);  
      useSetItem("userlist", JSON.stringify(userList.value)); 
    }
  }

  const deleteUser = (newUser: userType) => {
    const existUser = userList.value.filter(user=> user.name !== newUser.name);
    userList.value = existUser ; 
      useSetItem("userlist", JSON.stringify(existUser));
  };

  return {userList ,addUser ,deleteUser}
})
