

<script lang="ts" setup>
import { ref } from "vue";

// Ref to store the preview image URL
const previewImage = ref<string | null>(null);

// Function to handle file upload
const handleImageUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      previewImage.value = reader.result as string; // Update the image preview
    };

    reader.readAsDataURL(file); // Read the file as a base64 string
  }
};
</script>



