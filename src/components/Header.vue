<template>
  <header
    class="fixed w-full z-50 flex flex-wrap gap-10 items-center px-6 bg-white rounded-xl shadow-md max-md:px-5"
  >
    <div class="flex flex-col self-stretch my-auto w-[125px]">
      <router-link to="/home">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ce803df15e195626003640b1fce594ffcf69f6977956d6d71c8b7460c1493a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Adventure Logo"
          class="object-contain max-w-full aspect-[5] w-[125px]"
        />
      </router-link>
    </div>

    <nav
      class="flex flex-col flex-1 shrink justify-center self-stretch my-auto text-base tracking-normal leading-none whitespace-nowrap basis-0 min-w-[240px] text-black text-opacity-70 max-md:max-w-full"
    >
      <ul class="flex flex-wrap gap-6 w-full min-h-[61px] max-md:max-w-full">
        <li>
          <router-link
            to="/home"
            class="gap-2 self-stretch px-5 py-4 h-full font-medium text-center bg-white border-b-2 border-solid border-b-[#576652] text-stone-600"
            active-class="text-[#00B9C2]"
            exact
            >Главная</router-link
          >
        </li>
        <li>
          <router-link
            to="/products"
            class="gap-2 self-stretch px-5 py-4 h-full bg-white"
            active-class="text-[#00B9C2]"
            >Товары</router-link
          >
        </li>
        <li>
          <router-link
            to="/tours"
            class="gap-2 self-stretch px-5 py-4 h-full bg-white"
            active-class="text-[#00B9C2]"
            >Туры</router-link
          >
        </li>
        <li>
          <router-link
            to="/favorites"
            class="gap-2 self-stretch px-5 py-4 h-full bg-white"
            active-class="text-[#00B9C2]"
            >Избранное</router-link
          >
        </li>
        <li>
          <router-link
            to="/profile"
            class="gap-2 self-stretch px-5 py-4 h-full bg-white"
            active-class="text-[#00B9C2]"
            >Аккаунт</router-link
          >
        </li>
      </ul>
    </nav>

    <div
      class="flex gap-4 self-stretch my-auto whitespace-nowrap rounded-xl min-w-[240px] w-[437px] max-md:max-w-full"
    >
      <form
        class="flex flex-col grow shrink-0 justify-center py-1.5 pr-3.5 pl-5 text-sm leading-loose bg-white rounded-xl border border-solid shadow-sm basis-0 border-zinc-300 min-h-[43px] text-black text-opacity-70 w-fit"
      >
        <div class="flex justify-center items-center w-full min-h-[32px]">
          <label for="search" class="sr-only">Поиск</label>
          <input
            type="search"
            id="search"
            class="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
            placeholder="Поиск"
          />
          <button type="submit" aria-label="Search">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/56db22723fb82f0f30f530a58dbd3500743b2e1923985765bfb420f916d8a1bc"
              alt="search"
              class="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </button>
        </div>
      </form>
      <button
        class="overflow-hidden gap-1 self-stretch px-8 py-3 text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
        type="button"
      >
        Создать
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  width: 97%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}
li a {
  display: flex;
  align-items: center;
}
</style>
