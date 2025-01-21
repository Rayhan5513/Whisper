<template>
  <div class="flex justify-between gap-4 bg-slate-600 text-white px-2 py-2 rounded items-center">
         <div class="flex gap-2 items-center">
          <h1>{{ user.name }}</h1>
         <p class="text-sm">({{ user.role }})</p>
         </div>
         <button @click="ondelete" class="justify-self-end">x</button>
      </div>
</template>

<script lang="ts" setup>
import { useMyUserStore } from '~/store/userStore';

  const {user} = defineProps(['user']) ; 

  const userStore = useMyUserStore();

  const ondelete = ()=>{
        userStore.deleteUser(user) ;
  }
</script>

<style>

</style>