
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SelectButton } from 'primevue';
const value = ref('User');
const emit = defineEmits(['selectedRole'])
const options = ref(['User', 'Admin']);

watch(value , ()=>{
  emit('selectedRole',value.value)
})
</script>
