<template>
  <div class="h-[60vh] mt-14 flex flex-col justify-end items-center">
    <div class="  flex flex-col w-full  relative rounded-md ">
      <div class="overflow-y-scroll max-h-96 w-full flex flex-col items-center  px-4 gap-2">
        <div
          v-for="message in messageStore.messageList"
          :key="message.id"
          :class="`${!message.user||message.user.name==='@user'?'ml-auto':'mr-auto'} space-y-4 messagecart flex-col   justify-center items-center` "
        >
          <div  class="flex gap-2">
            <DisplayPicture class="mt-5" :message="message"/>
            <Message class="mt-4" :message="message" />
          </div>
          <div class="flex flex-col gap-2">
            <div v-if="message?.image">
    <img :src="message.image" alt="" srcset="" class="w-20 h-20 object-cover rounded-md">
  </div>
          </div>
        </div>
      </div>

  <div v-if="previewImage" class="relative">
  <img 
    :src="previewImage" 
    alt="Preview" 
    class="w-14 h-14 object-cover absolute -translate-y-11 border-gray-300 rounded-lg shadow-sm" 
  />
  <button 
  @click="previewImage=null" 
  class="absolute -top-10 -left-1 w-4 h-4 bg-gray-700 text-white text-xs rounded-full flex items-center justify-center transform -translate-y-1/2 shadow-md"
>
  &times;
</button>
</div>



        <div class="flex justify-betwwen gap-1 pt-4">
        <input 
      
      id="fileInput" 
      type="file" 
      accept="image/*" 
      @change="handleImageUpload" 
      class="hidden"      
    />
    <label 
      for="fileInput" 
      class="cursor-pointer flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600" title="Upload Image"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor" 
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </label>



    


          <InputText
            v-model="inputMessage"
            type="text"
            placeholder="Type your message..."
            class="flex-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            @keydown.enter="handleMessageSubmit"
          />
          <UiSelectUser @selectedUser="handleSelectUser" />
          <Button
            @click="handleMessageSubmit"
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </Button>
        
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { Button } from "primevue";
import { InputText } from "primevue";
import type userType from "~/interface/userType";
import { useMyMessageStore } from "~/store/messageStore";
const selectedUser = ref<userType | null>();
const inputMessage = ref<string>("");
const handleSelectUser = (user: userType) => {
  selectedUser.value = user;
};
const inputImage = ref(); 
const messageStore = useMyMessageStore();
const handleMessageSubmit = async () => {
  if (inputMessage.value.length > 0 || previewImage.value) {
    const message = {
      message: inputMessage?.value,
      user: selectedUser?.value,
      image:previewImage.value
    };

    messageStore.addMessage(message);
    inputMessage.value = "";
    previewImage.value=null;
    await nextTick();
    lastMessageIntoView();
  }
};
const lastMessageIntoView = () => {
  const messageCart = document.querySelectorAll(".messagecart");
  if(messageCart.length>0){
    messageCart[messageCart.length - 1].scrollIntoView({ behavior: "smooth" });}
};
onMounted(() => {
  lastMessageIntoView();
});


const previewImage = ref<string | null>(null);
const handleImageUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      previewImage.value = reader.result as string;
    };

    reader.readAsDataURL(file);
  }
};

</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
