<!-- src/components/RegistrationForm.vue -->
<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col justify-center items-center p-5 bg-white rounded-lg shadow-md"
  >
    <h1 class="text-2xl font-semibold mb-4">Регистрация</h1>
    <div class="w-full space-y-4">
      <!-- Имя Фамилия -->
      <div class="flex items-center border rounded-xl px-4 py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc40e1af2e9472f5a845e6af0e4bade608fcd10e85d8213adc2ef8a3086f68ff?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Full Name Icon"
          class="w-5 h-5 mr-3"
        />
        <input
          type="text"
          id="fullName"
          v-model="formData.fullName"
          class="flex-1 outline-none"
          placeholder="Имя Фамилия"
          required
        />
      </div>

      <!-- Электронная почта -->
      <div class="flex items-center border rounded-xl px-4 py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c42c77082d131980ce3a7855a5fd31aa3467b5b367e77188782228e4e3d973a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Email Icon"
          class="w-5 h-5 mr-3"
        />
        <input
          type="email"
          id="email"
          v-model="formData.email"
          class="flex-1 outline-none"
          placeholder="Электронная почта"
          required
        />
      </div>

      <!-- Пароль -->
      <div class="flex items-center border rounded-xl px-4 py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08fc65aacd6ca6c071e8d18980a315cd75c329ff34863a16505f6c0cd55eee76?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Password Icon"
          class="w-5 h-5 mr-3"
        />
        <input
          type="password"
          id="password"
          v-model="formData.password"
          class="flex-1 outline-none"
          placeholder="Пароль"
          required
        />
      </div>

      <!-- Подтверждение Пароля -->
      <div class="flex items-center border rounded-xl px-4 py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdee8c85efbd0938e0dd953d5eb7fbb560f4569a590a2161a8a6942e46ceba0c?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Confirm Password Icon"
          class="w-5 h-5 mr-3"
        />
        <input
          type="password"
          id="confirmPassword"
          v-model="formData.confirmPassword"
          class="flex-1 outline-none"
          placeholder="Повторите пароль"
          required
        />
      </div>

      <!-- Выбор Роли -->
      <div class="flex items-center border rounded-xl px-4 py-3">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/role-icon-url?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Role Icon"
          class="w-5 h-5 mr-3"
        />
        <select
          id="role"
          v-model="formData.role"
          class="flex-1 outline-none bg-transparent"
          required
        >
          <option value="" disabled>Выберите роль</option>
          <option value="user">Пользователь</option>
          <option value="admin">Администратор</option>
          <option value="guide">Гид</option>
        </select>
      </div>
    </div>

    <button
      type="submit"
      class="w-full bg-stone-600 text-white py-3 rounded-xl mt-6 hover:bg-stone-700 transition"
    >
      Создать аккаунт
    </button>

    <p class="text-sm text-center text-neutral-700 mt-2">
      <span>Регистрируясь, вы соглашаетесь с </span>
      <a href="#" class="text-stone-600"
        >правилами обработки персональных данных</a
      >
    </p>

    <p class="text-sm text-center text-neutral-700 mt-4">
      <span>Уже есть аккаунт? </span>
      <a href="#" @click.prevent="$emit('toggleToLogin')" class="text-stone-600"
        >Войти</a
      >
    </p>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "@/store/useUsersStore";
import { ElNotification } from "element-plus";

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export default defineComponent({
  name: "RegistrationForm",
  emits: ["toggleToLogin"],
  setup(_, { emit }) {
    const userStore = useUserStore();
    const formData = ref<FormData>({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "", // Инициализация роли пустым значением
    });

    const handleSubmit = async () => {
      // Проверка совпадения паролей
      if (formData.value.password !== formData.value.confirmPassword) {
        ElNotification({
          type: "error",
          message: "Пароли не совпадают",
        });
        return;
      }

      // Проверка выбранной роли
      if (!formData.value.role) {
        ElNotification({
          type: "error",
          message: "Пожалуйста, выберите роль",
        });
        return;
      }

      // Подготовка данных для отправки
      const createUserDto = {
        name: formData.value.fullName,
        email: formData.value.email,
        password: formData.value.password,
        role: formData.value.role, // Добавляем роль
      };

      // Вызов метода создания пользователя из стора
      try {
        await userStore.createUser(createUserDto);
        // Уведомление и перенаправление уже обрабатываются в методе стора
      } catch (error: any) {
        // Ошибка уже обрабатывается в методе стора
      }
    };

    return {
      formData,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
/* Добавьте дополнительные стили при необходимости */
/* Пример стилей для улучшения внешнего вида */
form {
  max-width: 400px;
  width: 100%;
}

select {
  appearance: none;

  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  padding-right: 30px;
}
</style>
