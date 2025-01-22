
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="value" :options="options" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SelectButton } from 'primevue';
const value = ref('Male');
const emit = defineEmits(['selectedGender'])
const options = ref(['Male', 'Female','Others']);

watch(value , ()=>{
  emit('selectedGender',value.value)
})
</script>
