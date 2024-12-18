<script lang="ts">
interface ReviewCardProps {
  authorName: string;
  username: string;
  avatarSrc: string;
  ratingSrc: string;
  reviewText: string;
  images: string[];
}

export default {
  name: "ReviewCard",
  props: {
    authorName: { type: String, required: true },
    username: { type: String, required: true },
    avatarSrc: { type: String, required: true },
    ratingSrc: { type: String, required: true },
    reviewText: { type: String, required: true },
    images: { type: Array as () => string[], required: true },
  },
};
</script>

<template>
  <div
    class="flex flex-col grow shrink px-10 py-8 bg-gray-200 rounded-xl min-w-[240px] w-[530px] max-md:px-5 max-md:max-w-full"
  >
    <div class="flex flex-wrap gap-5 items-start w-full max-md:max-w-full">
      <div
        class="flex flex-wrap flex-1 shrink gap-3.5 items-start leading-none basis-0 min-w-[240px] text-black text-opacity-70 max-md:max-w-full"
      >
        <img
          :src="avatarSrc"
          :alt="authorName"
          loading="lazy"
          class="object-contain shrink-0 rounded-xl aspect-square w-[82px]"
        />
        <div class="flex flex-col">
          <div class="gap-2.5 text-xl font-bold">{{ authorName }}</div>
          <div class="mt-1 text-sm">{{ username }}</div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-end w-[125px]">
        <img
          :src="ratingSrc"
          alt="Rating"
          loading="lazy"
          class="object-contain max-w-full aspect-[5] w-[125px]"
        />
      </div>
    </div>
    <div
      class="mt-5 text-sm leading-4 text-black text-opacity-70 max-md:max-w-full"
    >
      {{ reviewText }}
    </div>
    <div class="flex gap-3.5 items-start self-start mt-5">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="`Review image ${index + 1}`"
        loading="lazy"
        class="object-contain shrink-0 rounded-xl aspect-square w-[100px]"
      />
    </div>
  </div>
</template>
