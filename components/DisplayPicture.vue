<template>
 <div class="flex">
  <div :title="message.user?.name" 
    :class="`w-9 h-9 rounded-3xl cursor-pointer flex justify-center items-center text-xl font-semibold text-white ${!message.user||message.user==='@user'?'bg-green-600':message.user.color}`">
    
    {{ !message.user || message.user.name === '@user' ? 'ME' : message.user.name.slice(0, 2).toUpperCase() }}

  </div>
 </div>
</template>

<script lang="ts" setup>
const { message } = defineProps(['message']);


</script>

<style scoped>

</style>
