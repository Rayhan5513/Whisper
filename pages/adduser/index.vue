<template>
  <div class="">
    <UiAddform/>

    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { UiAddform } from '#components';
import { useMyUserStore } from '~/store/userStore';


const userStore = useMyUserStore(); 



</script>

<style>

</style>