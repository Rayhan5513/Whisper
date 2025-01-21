<template>
  <div class="flex flex-col justify-center gap-4 pt-20 items-center ">
   
    <div class="card flex flex-col  justify-center">
        <Button label="User +" @click="visible = true"  />
        <Dialog v-model:visible="visible" modal header="Create User" :style="{ width: '25rem' }">
             <UiAddform/>
        </Dialog>
    </div>
   <div class="flex flex-col text-xl gap-4 ">
    <h1 class="text-3xl font-semibold">Users</h1>
     <div v-for="user in userStore.userList" class="flex flex-col">
       <UserProfile :user="user" />
    </div>
   </div>
  </div>
</template>

<script lang="ts" setup>
import { UiAddform } from '#components';
import { useMyUserStore } from '~/store/userStore';
import { Button } from 'primevue';
import {Dialog} from 'primevue';
const visible = ref(false);``

const userStore = useMyUserStore(); 



</script>

<style>

</style>