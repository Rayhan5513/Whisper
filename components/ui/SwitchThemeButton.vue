
<template>
    <ToggleSwitch :label="useThemeStore.currentTheme" @click="useThemeStore.toggleTheme" />
</template>

<script setup>

import { ToggleSwitch } from 'primevue';
import { useMyThemStore } from '~/store/themeStore';

const useThemeStore = useMyThemStore() ;

</script>
