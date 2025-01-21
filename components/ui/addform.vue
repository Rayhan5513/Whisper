
<template>
    <div class="card flex justify-center">

        <Form @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
            <div class="flex flex-col gap-4">
                <InputText v-model="inputText" name="username" type="text" placeholder="Username" fluid />    
  <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" />
            </div>
            <Button type="submit" severity="secondary" label="Submit" />
        </Form>
    </div>
</template>

<script lang="ts" setup>
import { Form } from '@primevue/forms';
import { InputText } from 'primevue';
import {Button} from 'primevue'
import {FileUpload} from 'primevue';


const inputText = ref<string>('')
const fileupload = ref();

const onFormSubmit = () => {
   console.log(fileupload.value.files[0].name)
   console.log(inputText.value)
  
};
</script>
