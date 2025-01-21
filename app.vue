
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { useMyThemStore } from '~/store/themeStore';
const useThemeStore = useMyThemStore() ;

useThemeStore.currentTheme==="dark"?document.documentElement.classList.add('my-app-dark'):document.documentElement.classList.remove('my-app-dark'); 
</script>


