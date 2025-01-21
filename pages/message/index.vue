<template>
 <div class=" pt-10  relative flex justify-center">
    <div class="flex flex-col w-2/5 h-96 bg-gray-100 rounded-md">
    <!-- Message Box -->
    <div class="flex-1 overflow-y-auto p-4">
      <div class="space-y-4">
       
        <!-- More messages will go here -->
      </div>
    </div>

    <!-- Input Box -->
    <div class="border-t pt-4 ">
      <div class="flex justify-between gap-2 ">
        <InputText
          type="text"
          placeholder="Type your message..."
          class="flex-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <UiSelectUser @selectedUser="handleSelectUser"/>
        <Button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send
        </Button>
      </div>
    </div>
  </div>
 </div>
</template>

<script lang="ts" setup>
import { Button } from 'primevue';
import {InputText} from 'primevue';
import {Fieldset} from 'primevue';
import type userType from '~/interface/userType';
const selectedUser = ref<userType|null>()

const handleSelectUser = (user:userType)=>{
  selectedUser.value = user;
}

</script>

<style lang="scss" scoped>
</style>
