import { defineStore } from "pinia";
import { ref } from "vue";

export const useMyThemStore = defineStore("defineTheme", () => {
  const currentTheme = ref<string>(localStorage.getItem("theme") || "light");

  const setTheme = (theme: string) => {
    useSetItem('theme',currentTheme.value)
  };

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
    useSetItem('theme',currentTheme.value)
    document.documentElement.classList.toggle("my-app-dark");
  };

  return { currentTheme, setTheme, toggleTheme };
});
