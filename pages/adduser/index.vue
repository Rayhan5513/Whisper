<template>
  <div class="flex flex-col justify-center gap-4 pt-10 items-center ">
   
    <div class="card flex flex-col  justify-center w-1/5 max-sm:w-full  ">
        <Button label="User +" @click="visible = true" unstyled class="text-xl bg-slate-800  px-12 py-2 text-white rounded-md " />
        <Dialog v-model:visible="visible" modal header="Create User" :style="{ width: '25rem' }">
             <UiAddform @submituser="visible=false"/>
        </Dialog>
    </div>
   <div class="flex flex-col text-xl gap-4 w-1/5 max-sm:w-full  ">
    <h1 class="text-2xl font-medium ">Users</h1>
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
const visible = ref(false);

const userStore = useMyUserStore(); 



</script>

<style>

</style>