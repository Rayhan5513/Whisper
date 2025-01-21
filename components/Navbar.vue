<template>
  <nav
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

    <ul class="flex space-x-4 mr-20 items-center">
      <li>
        <NuxtLink
          to="/adduser"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          User
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/message"
          class="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Chat
        </NuxtLink>
      </li>
      <li class="bg-white cursor-pointer text-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 hover:text-white transition">
          Mode Change
      </li>
    </ul>
  </nav>
</template>
<script setup>
</script>
