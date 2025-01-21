
<template>
    <div class="card flex justify-center">

        <Form @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-4">
             <InputText v-model="inputName" name="username" type="text" placeholder="Username" fluid />      
             <InputText v-model="inputRole" name="role" type="text" placeholder="Role" fluid /> 
            <InputText v-model="inputGender" name="gender" type="text" placeholder="Gender" fluid />    
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script lang="ts" setup>
import { Form } from '@primevue/forms';
import { InputText } from 'primevue';
import {Button} from 'primevue'
import { useMyUserStore } from '~/store/userStore';
const inputName = ref<string>('')
const inputRole = ref<string>('')
const inputGender = ref<string>('')

const userStore = useMyUserStore(); 
const onFormSubmit = () => {
   const user =  {
            name:inputName.value ,
            role:inputRole.value ,
            gender:inputGender.value
   }
   if(user.name.length>0 && user.role.length>0 && user.gender.length>0){
      userStore.addUser(user); 
      inputName.value = '' ; 
      inputRole.value = '' ; 
      inputGender.value = ''; 
   }  
};
</script>
