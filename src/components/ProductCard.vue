<script lang="ts">
interface ProductCardProps {
  image: string;
  title: string;
  seller: string;
  sellerImage: string;
  price: number;
  favoriteIcon: string;
}

export default {
  name: "ProductCard",
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    seller: { type: String, required: true },
    sellerImage: { type: String, required: true },
    price: { type: Number, required: true },
    favoriteIcon: { type: String, required: true },
  },
};
</script>

<template>
  <div
    class="flex overflow-hidden relative flex-col w-64 bg-gray-200 rounded-xl min-w-[240px]"
  >
    <img
      :src="image"
      :alt="title"
      loading="lazy"
      class="object-contain z-0 w-full aspect-[1.28] min-h-[200px]"
    />
    <div class="flex z-0 flex-col px-6 py-4 w-full max-md:px-5">
      <div class="flex flex-col w-full">
        <div class="line-clamp-1 text-xl font-semibold">{{ title }}</div>
        <div class="flex gap-2 items-center mt-1.5 text-sm">
          <img
            :src="sellerImage"
            :alt="seller"
            loading="lazy"
            class="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
          />
          <div class="self-stretch my-auto w-[188px]">{{ seller }}</div>
        </div>
      </div>
      <div class="flex-1 shrink gap-3.5 mt-3.5 w-full text-xl font-semibold">
        {{ price.toLocaleString() }} ₽
      </div>
      <button
        class="gap-2.5 self-stretch px-7 py-2.5 mt-3.5 w-full text-sm leading-none text-white whitespace-nowrap rounded-xl bg-stone-600 min-h-[35px] max-md:px-5"
        aria-label="Добавить в корзину"
      >
        Добавить
      </button>
    </div>
    <img
      :src="favoriteIcon"
      alt=""
      loading="lazy"
      class="object-contain absolute top-4 z-0 aspect-[1.16] h-[19px] left-[23px] w-[22px]"
    />
  </div>
</template>
<style scoped>
.line-clamp-1 {
  display: block; /* Устанавливаем элемент как блочный */
  overflow: hidden; /* Скрываем текст, выходящий за пределы контейнера */
  white-space: nowrap; /* Запрещаем перенос строк */
  text-overflow: ellipsis; /* Добавляем многоточие для переполненного текста */
}
</style>
