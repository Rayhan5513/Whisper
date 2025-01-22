
<template>
    <div class="card flex justify-center">
        <Select v-model="selectedUser" :options="options" optionLabel="name" placeholder="@user" class="w-full md:w-32" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type userType from "~/interface/userType";
import { Select } from "primevue";
import { useMyUserStore } from "~/store/userStore";

const emit = defineEmits(['selectedUser'])
const selectedUser = ref<userType|null>();
const userStore = useMyUserStore() ; 
const users = ref<userType[]>(userStore.userList);
const atUserOption = ref<userType>({
    name: "@user",
    role: "admin",
    gender:'male' ,
    color:'bg-green-600'
});
const options = computed(() => [atUserOption.value, ...users.value]);

watch(selectedUser, ()=>{
       emit('selectedUser', selectedUser.value)
})



</script>
