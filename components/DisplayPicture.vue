<template>
 <div class="">
  <Avatar 
 :image="`${!message.user||message.user==='@user'?'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png':'https://primefaces.org/cdn/primevue/images/organization/walter.jpg'}`" 
 class="mr-2 w-4" 
 size="normal" 
 shape="circle" /> 
 </div>
</template>

<script lang="ts" setup>
import { Avatar } from 'primevue';
const {message} = defineProps(['message'])
</script>

<style>

</style>