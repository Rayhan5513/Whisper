<template>
  <div
    class="bg-[#ff6666] text-white flex justify-between items-center h-20 m-3 p-10 mt-4"
  >
    <div>
      <NuxtLink
        to="/"
        class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
      >
        Home
      </NuxtLink>
    </div>

    <!-- Other Buttons on the Right -->
    <ul class="flex space-x-4 mr-20">
      <li>
        <NuxtLink
          to="/user"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          User
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/chat"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Chat
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/modeChange"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Mode Change
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
