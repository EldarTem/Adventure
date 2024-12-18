<template>
  <div class="flex flex-col mt-4 w-full max-w-[240px]">
    <label :for="id" class="text-sm leading-none text-black text-opacity-70">{{
      title
    }}</label>
    <div
      class="flex overflow-hidden gap-2.5 items-center px-3 py-1.5 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
    >
      <span
        class="self-stretch my-auto text-sm tracking-normal leading-loose text-zinc-600"
      >
        От
      </span>
      <input
        :id="`${id}-min`"
        type="number"
        :value="min"
        class="flex-1 shrink text-sm tracking-normal leading-loose text-center text-zinc-400"
        aria-label="Минимальная цена"
      />
      <span
        class="self-stretch my-auto text-sm tracking-normal leading-loose text-zinc-600"
      >
        до
      </span>
      <input
        :id="`${id}-max`"
        type="number"
        :value="max"
        class="w-20 text-sm tracking-normal leading-loose text-center text-zinc-400"
        aria-label="Максимальная цена"
      />
      <button
        class="flex items-start self-stretch my-auto w-3.5"
        aria-label="Применить фильтр цены"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dabe38f2587663595e3567cd8578b349714e26b98c8b97df4732db1d7751fbb1?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain w-3.5 aspect-square"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PriceFilter",
  props: {
    title: {
      type: String,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const id = `price-filter-${Math.random().toString(36).substr(2, 9)}`;
    return { id };
  },
});
</script>
