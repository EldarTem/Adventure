<template>
  <div
    class="flex overflow-hidden relative flex-col bg-gray-200 rounded-xl min-w-[240px] w-[341px] max-h-[436px]"
  >
    <img
      :src="tour.image"
      :alt="tour.title"
      loading="lazy"
      class="object-contain z-0 w-full aspect-[1.7] min-h-[200px]"
    />
    <div
      class="flex z-0 flex-col px-6 py-4 w-full text-black text-opacity-70 max-md:px-5"
    >
      <div class="flex flex-col max-w-full w-[267px]">
        <h3 class="text-xl font-semibold">{{ tour.title }}</h3>
        <div
          class="flex gap-2 items-center self-start mt-1.5 text-sm whitespace-nowrap"
        >
          <img
            :src="tour.locationIcon"
            :alt="tour.location"
            loading="lazy"
            class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square rounded-[30px]"
          />
          <div class="self-stretch my-auto">{{ tour.location }}</div>
        </div>
      </div>

      <!-- Обрезка описания на 4 строки -->
      <p class="desc-card mt-3.5 line-clamp-4">{{ tour.description }}</p>

      <div
        class="flex gap-3.5 justify-center items-center self-start mt-3.5 text-sm font-light"
      >
        <div class="self-stretch my-auto">{{ tour.type }}</div>
        <div class="self-stretch my-auto">{{ tour.duration }}</div>
        <div class="self-stretch my-auto">{{ tour.mode }}</div>
      </div>
      <div class="flex gap-3.5 items-start mt-3.5 w-full text-xl font-semibold">
        <div class="flex-1 shrink basis-0">{{ tour.price }} ₽</div>
        <img
          :src="tour.actionImage"
          alt=""
          loading="lazy"
          class="object-contain shrink-0 aspect-[5] w-[120px]"
        />
      </div>
    </div>
    <img
      :src="tour.favoriteIcon"
      alt=""
      loading="lazy"
      class="object-contain absolute top-4 z-0 aspect-[1.16] h-[19px] left-[23px] w-[22px]"
    />
    <div
      class="flex absolute z-0 gap-1.5 justify-between items-center text-sm font-semibold text-white whitespace-nowrap left-[23px] top-[167px] w-[43px]"
    >
      <div class="self-stretch my-auto">{{ tour.rating }}</div>
      <img
        :src="tour.ratingIcon"
        alt=""
        loading="lazy"
        class="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
      />
    </div>
  </div>
</template>

<script lang="ts">
interface TourProps {
  image: string;
  title: string;
  locationIcon: string;
  location: string;
  description: string;
  type: string;
  duration: string;
  mode: string;
  price: number;
  actionImage: string;
  favoriteIcon: string;
  rating: number;
  ratingIcon: string;
}

export default {
  name: "TourCard",
  props: {
    tour: {
      type: Object as () => TourProps,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Лимит 4 строки для описания */
.line-clamp-4 {
  display: -webkit-box; /* Используем flex-like box для текста */
  -webkit-line-clamp: 4; /* Ограничение на 4 строки */
  -webkit-box-orient: vertical; /* Устанавливаем вертикальную ориентацию */
  overflow: hidden; /* Обрезка текста, который выходит за границы */
  text-overflow: ellipsis; /* Добавляем многоточие */
}
.desc-card {
  font-size: 14px;
  line-height: 15px;
}
</style>
