<template>
  <div v-if="message.message.length>0"
       class=" messagecart bg-green-300 text-black max-w-fit self-end px-2 py-1 rounded-tr-xl rounded-bl-xl flex items-center text-lg justify-center  ">
    
    <span>{{message.message}}</span>
  
  </div>
</template>

<script lang="ts" setup>
const {message} = defineProps(['message'])
</script>

<style>

</style>