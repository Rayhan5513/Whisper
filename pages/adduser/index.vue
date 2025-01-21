<template>
  <div class="flex justify-center gap-32 pt-20 items-center ">
    <UiAddform/>
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


const userStore = useMyUserStore(); 



</script>

<style>

</style>