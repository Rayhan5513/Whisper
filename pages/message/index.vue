<template>
  <div class="h-[60vh] mt-14 flex flex-col justify-end items-center">
    <div class="flex flex-col w-2/5 relative max-md:w-5/6 ">
      <div class="overflow-y-scroll max-h-96 w-full flex flex-col px-4 gap-2">
        <div
          v-for="message in messageStore.messageList"
          :key="message.id"
         
          :class="`${!message.user||message.user==='@user'?'ml-auto':'mr-auto'} space-y-4 messagecart flex` "
        >
          <Message :message="message" />
           <sup class="font-bold ml-3 ">{{ message.user!=='@user'? message?.user:'' }}</sup>
        </div>
      </div>

      <div class="pt-4">
        <div class="flex justify-between gap-2">
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

const messageStore = useMyMessageStore();
const handleMessageSubmit = async () => {
  if (inputMessage.value.length > 0) {
    const message = {
      message: inputMessage?.value,
      user: selectedUser?.value?.name,
    };

    messageStore.addMessage(message);
    inputMessage.value = "";
    await nextTick();
    lastMessageIntoView();
  }
};
const lastMessageIntoView = () => {
  const messageCart = document.querySelectorAll(".messagecart");
  messageCart[messageCart.length - 1].scrollIntoView({ behavior: "smooth" });
};
onMounted(() => {
  lastMessageIntoView();
});
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
