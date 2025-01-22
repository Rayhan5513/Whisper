<template>

 <div >
   <Card class="h-14 flex font-semibold justify-center" >
      <template #content>
           <div class="flex justify-between gap-4 px-2 py-2 rounded items-center">
    
         <div class="flex gap-2 items-center">
          <h1>{{ user.name }}</h1>
    
          <p class="text-sm">({{ user.role }})</p>
        </div>
        <button @click="ondelete" class="justify-self-end">x</button>
      </div>
        </template>
 
    </Card>
 </div>
</template>

<script lang="ts" setup>
import { useMyUserStore } from '~/store/userStore';
import { Card } from 'primevue';
  const {user} = defineProps(['user']) ; 

  const userStore = useMyUserStore();

  const ondelete = ()=>{
        userStore.deleteUser(user) ;
  }
</script>

<style>

</style>