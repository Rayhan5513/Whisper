import type userType from "~/interface/userType"
export const useSetItem = (key:string , value:any) => {
        localStorage.setItem(key ,value) 
}
