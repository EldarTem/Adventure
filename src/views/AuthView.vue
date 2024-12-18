<!-- src/views/AuthView.vue -->
<template>
  <div
    class="auth-container flex justify-center items-center min-h-screen bg-gray-100"
  >
    <div class="w-full max-w-md">
      <RegistrationForm v-if="isRegister" @toggleToLogin="toggleForm" />
      <LoginForm v-else @toggleToRegister="toggleForm" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import RegistrationForm from "@/components/RegistrationCard.vue";
import LoginForm from "@/components/LoginCard.vue";

export default defineComponent({
  name: "AuthView",
  components: {
    RegistrationForm,
    LoginForm,
  },
  setup() {
    const isRegister = ref(true);

    const toggleForm = () => {
      isRegister.value = !isRegister.value;
    };

    return {
      isRegister,
      toggleForm,
    };
  },
});
</script>

<style scoped>
.auth-container {
  /* Добавьте необходимые стили или используйте TailwindCSS классы */
}
</style>
