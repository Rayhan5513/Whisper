<template>
  <div class="flex justify-between gap-4 bg-red-300 px-2 py-1 rounded items-center">
         <div class="flex gap-2 items-center">
          <h1>{{ user.name }}</h1>
         <p class="text-sm">({{ user.role }})</p>
         </div>
         <button @click="ondelete" class="justify-self-end">x</button>
      </div>
</template>

<script lang="ts" setup>
  const {user} = defineProps(['user']) ; 

  const ondelete = ()=>{
        
  }
</script>

<style>

</style>