<template>
  <div class="" >
     <header>
      <nav class="flex justify-between items-center ">
        <NuxtLink to="/">
           <h1 class="font-spicy text-4xl tracking-wider">Whisper</h1>
        </NuxtLink>
        <ul class="flex items-center gap-2 ">
          <InputText class="w-32 max-sm:w-20 h-8 text-sm " type="text" placeholder="Search"  />
          <NuxtLink to="/users"><Button class="w-12 h-8 ">Users</Button></NuxtLink>
          <NuxtLink to="/message"><Button class="w-12 h-8 ">Chat</Button></NuxtLink>
           <UiSwitchThemeButton/>
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" class="" size="normal" shape="circle" />
        </ul>
      </nav>
    </header>
  </div>
</template>
<script lang="ts"  setup>
import { InputText } from 'primevue';
import {Avatar} from 'primevue';
import {Button} from 'primevue';
</script>
<style>
</style>