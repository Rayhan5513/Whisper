<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
      <main class="flex-grow container mx-auto mt-6 px-4">
        <div class="flex flex-col md:flex-row gap-6">

          <aside class="bg-white w-full md:w-1/4 p-4 rounded-md shadow">
            <h2 class="font-semibold text-lg mb-4">Chats</h2>
            <ul class="space-y-4">
              <li
                v-for="chat in chatList":key="chat.id"
                class="p-3 border  rounded-md hover:bg-blue-50 cursor-pointer"
              >

                <h3 class="font-medium">{{ chat.name }}</h3>
                
                <p class="text-sm text-gray-500 truncate">{{ chat.lastMessage }}</p>
              </li>

            </ul>
          </aside>
  
         
          <section class="flex-1 bg-white p-4 rounded-md shadow">
            <div class="h-96 overflow-y-auto mb-4">
             
              <div
                v-for="(message, index) in messages"
                :key="index"
                :class="[
                  'p-3 rounded-md my-2 max-w-xs',
                  message.isSender ? 'bg-blue-100 ml-auto' : 'bg-gray-200 mr-auto'
                ]"
              >
                {{ message.text }}
              </div>
            </div>
  
            
            <div class="flex items-center gap-2">
              <input
                v-model="newMessage"
                @keydown.enter="sendMessage"
                type="text"
                placeholder="Type a message..."
                class="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                @click="sendMessage"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  

  const chatList = ref([
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?" },
    { id: 2, name: "Jane Smith", lastMessage: "Let's catch up soon!" },
    { id: 3, name: "Team Project", lastMessage: "Deadline is tomorrow." },
  ]);
  

  const messages = ref([
    { text: "Hi there!", isSender: false },
    { text: "Hello! How can I help you?", isSender: true },
  ]);
  
  const newMessage = ref("");
  
  const sendMessage = () => {
    if (newMessage.value.trim() !== "") {
      messages.value.push({ text: newMessage.value, isSender: true });
      newMessage.value = "";
    }
  };

  </script>

  
  
  <style>
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  </style>
  