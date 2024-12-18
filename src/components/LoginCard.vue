<!-- src/components/LoginForm.vue -->
<template>
  <form
    @submit.prevent="handleLogin"
    class="flex flex-col justify-center items-center px-20 py-9 min-w-[240px] w-[463px] max-md:px-5"
  >
    <div class="flex flex-col items-center w-full">
      <div class="flex flex-col items-center text-black text-opacity-70">
        <h1 class="text-2xl font-semibold leading-none">Вход</h1>
        <p class="mt-1.5 text-sm leading-loose">Войдите в свой аккаунт</p>
      </div>
      <div class="flex flex-col mt-6 w-full">
        <div
          class="flex flex-col w-full text-xs tracking-normal leading-6 text-black text-opacity-70"
        >
          <div class="flex flex-col w-full">
            <!-- Поле Электронная почта -->
            <div
              class="flex overflow-hidden gap-4 items-center px-4 py-3 w-full bg-white rounded-xl min-h-[43px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85f7e89a29dcc835995fd3f71923852e203a196aadc65e3f0c1056083cc8373?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                alt=""
                class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              />
              <label for="email" class="sr-only">Электронная почта</label>
              <input
                type="email"
                id="email"
                v-model="loginData.email"
                class="w-full bg-transparent border-none outline-none"
                placeholder="Электронная почта"
                required
              />
            </div>
            <!-- Поле Пароль -->
            <div
              class="flex overflow-hidden gap-4 items-center px-4 py-3 mt-2.5 w-full bg-white rounded-xl min-h-[43px]"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08fc65aacd6ca6c071e8d18980a315cd75c329ff34863a16505f6c0cd55eee76?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                alt=""
                class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
              />
              <label for="password" class="sr-only">Пароль</label>
              <input
                type="password"
                id="password"
                v-model="loginData.password"
                class="w-full bg-transparent border-none outline-none"
                placeholder="Пароль"
                required
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col mt-5 w-full max-w-[311px]">
          <button
            type="submit"
            class="gap-2.5 self-stretch px-7 py-3 w-full text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
          >
            Войти
          </button>
          <p
            class="self-start mt-2 text-xs font-medium leading-4 text-center text-neutral-700 text-opacity-80"
          >
            <a
              href="#"
              @click.prevent="handleForgotPassword"
              class="text-stone-600"
              tabindex="0"
              >Забыли пароль?</a
            >
          </p>
        </div>
      </div>
      <div
        class="mt-6 text-sm font-medium leading-loose text-black text-opacity-70"
      >
        <span class="text-black">Нет аккаунта? </span>
        <a
          href="#"
          @click.prevent="toggleToRegister"
          class="text-stone-600"
          tabindex="0"
          >Зарегистрироваться</a
        >
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useUserStore } from "@/store/useUsersStore";
import { ElNotification } from "element-plus";

interface LoginData {
  email: string;
  password: string;
}

export default defineComponent({
  name: "LoginForm",
  emits: ["toggleToRegister"], // Добавляем событие для переключения на форму регистрации
  setup(_, { emit }) {
    const userStore = useUserStore();
    const loginData = ref<LoginData>({
      email: "",
      password: "",
    });

    const handleLogin = async () => {
      try {
        await userStore.login(loginData.value);
        // Уведомление и перенаправление уже обрабатываются в методе стора
      } catch (error: any) {
        // Ошибка уже обрабатывается в методе стора
      }
    };

    const toggleToRegister = () => {
      emit("toggleToRegister");
    };

    const handleForgotPassword = () => {
      // Реализуйте логику для сброса пароля или перенаправления на соответствующую страницу
      ElNotification({
        type: "info",
        message: "Функция сброса пароля ещё не реализована",
      });
    };

    return {
      loginData,
      handleLogin,
      toggleToRegister,
      handleForgotPassword,
    };
  },
});
</script>

<style scoped>
/* Добавьте необходимые стили или используйте TailwindCSS, как в вашем первоначальном примере */
</style>
