
<template>
    <div class="card flex justify-center">

        <Form @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-5">
                <UiSelectRole  @selectedRole="handeRole"/>
                <InputText v-model="inputName" name="username" type="text" placeholder="Username" fluid />      
             <UiSelectGender @selectedGender="handleGender"/>
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
const emit = defineEmits(['submituser'])
const inputName = ref<string>('')
const inputRole = ref<string>('User')
const inputGender = ref<string>('Male')
const userStore = useMyUserStore(); 

const handeRole = (value:string)=>{
    inputRole.value = value
}
const handleGender = (value:string)=>{
    inputGender.value = value ;
}

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
      emit('submituser',true)

   }  
};
</script>
