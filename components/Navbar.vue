<template>
  <div>
    <header>
      <nav class="flex flex-wrap justify-center items-center p-4 m-4 md:m-10">
        <ul class="flex items-center gap-4">
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            class=""
            size="normal"
            shape="circle"
          />
          <NuxtLink to="/">
            <h1 class="font-spicy text-2xl md:text-4xl tracking-wider">ChatApp</h1>
          </NuxtLink>
        </ul>

        <ul class="flex flex-wrap items-center gap-4 mt-4 md:mt-0">
          <!-- Add User Link -->
          <NuxtLink
            to="/adduser"
            class="px-3 py-2 text-sm md:text-base bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
          >
            Add User
          </NuxtLink>

          <!-- Message Link -->
          <NuxtLink
            to="/message"
            class="px-3 py-2 text-sm md:text-base bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition"
          >
            Message
          </NuxtLink>

          <!-- Theme Switch Button -->
          <UiSwitchThemeButton />
        </ul>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { Avatar } from "primevue";
</script>

<style>
</style>
