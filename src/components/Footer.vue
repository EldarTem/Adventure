<template>
  <footer
    class="flex relative z-0 flex-col items-start px-20 pt-10 pb-12 w-full bg-stone-600 bg-opacity-20 max-md:px-5 max-md:max-w-full"
  >
    <nav
      class="flex z-0 flex-col items-start text-sm leading-none whitespace-nowrap text-black text-opacity-70 w-[75px]"
    >
      <a href="#home">Главная</a>
      <a href="#products" class="mt-5">Товары</a>
      <a href="#favorites" class="self-stretch mt-5">Избранное</a>
      <a href="#account" class="mt-5">Аккаунт</a>
    </nav>
    <p
      class="gap-2.5 self-stretch mt-3 w-full text-xs leading-6 text-black text-opacity-70"
    >
      © 2024 Adventure. Все права защищены.
    </p>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>
