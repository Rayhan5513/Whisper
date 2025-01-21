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
      <li>
  
    <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" />
        <div class="w-10 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    </label>
</li>
    </ul>
  </nav>
</template>
<script setup>
</script>
