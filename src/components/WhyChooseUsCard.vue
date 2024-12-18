<script lang="ts">
interface WhyChooseUsCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

export default {
  name: "WhyChooseUsCard",
  props: {
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    iconAlt: { type: String, required: true },
  },
};
</script>

<template>
  <div
    class="flex flex-col px-10 pt-5 pb-12 bg-gray-200 rounded-xl min-h-[248px] min-w-[240px] w-[361px] max-md:px-5"
  >
    <img
      :src="icon"
      :alt="iconAlt"
      loading="lazy"
      class="object-contain w-11 aspect-square"
    />
    <div class="flex flex-col mt-3.5 w-full">
      <div class="self-start text-3xl font-semibold leading-none text-center">
        {{ title }}
      </div>
      <div class="mt-2.5 text-xl leading-7">{{ description }}</div>
    </div>
  </div>
</template>
