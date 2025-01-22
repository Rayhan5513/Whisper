<template>
  <div >
     <header>
      <nav class="flex justify-between items-center ">
        <NuxtLink to="/">
           <h1 class="font-spicy text-4xl tracking-wider">Whisper</h1>
        </NuxtLink>
        <ul class="flex items-center gap-2 ">
          <InputText class="w-32 max-sm:w-20 h-8 text-sm " type="text" placeholder="Search"  />
           <UiSwitchToggle/>
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="" size="normal" shape="circle" />
        </ul>
      </nav>
    </header>
  </div>
</template>
<script lang="ts"  setup>
import Avatar from 'primevue/avatar';
</script>
<style>
</style>