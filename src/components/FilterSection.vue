<template>
  <div class="flex flex-col mt-4 w-full max-w-[240px]">
    <label :for="id" class="text-sm leading-none text-black text-opacity-70">{{
      title
    }}</label>
    <div
      class="flex overflow-hidden gap-5 justify-between py-1 pr-3 pl-1.5 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
    >
      <div
        class="flex gap-1 items-center text-xs tracking-normal leading-loose text-center text-neutral-400"
      >
        <div
          v-for="item in selected"
          :key="item"
          class="flex gap-1.5 justify-center items-center self-stretch py-0.5 pr-1.5 pl-2.5 my-auto rounded-sm bg-zinc-100"
        >
          <div class="self-stretch my-auto">{{ item }}</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bbb4b0fbbd500b845d481d42b3a547a5811f951972f2c76fd0754901e58056?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
            class="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
        </div>
      </div>
      <button
        class="flex items-start my-auto"
        @click="toggleDropdown"
        :aria-expanded="isOpen"
        :aria-controls="dropdownId"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dabe38f2587663595e3567cd8578b349714e26b98c8b97df4732db1d7751fbb1?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain w-3.5 aspect-square"
          alt=""
        />
      </button>
    </div>
    <div
      v-if="options.length && isOpen"
      :id="dropdownId"
      class="flex flex-col mt-1 w-full text-xs tracking-normal leading-loose text-black text-opacity-70"
    >
      <div
        class="flex flex-col py-2 w-full bg-white rounded border border-gray-200 border-solid shadow-sm"
      >
        <button
          v-for="option in options"
          :key="option"
          class="overflow-hidden px-5 py-1.5 w-full text-left hover:bg-gray-50"
          @click="selectOption(option)"
        >
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FilterSection",
  props: {
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Array as () => string[],
      required: true,
    },
    options: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const id = `filter-${Math.random().toString(36).substr(2, 9)}`;
    const dropdownId = `dropdown-${id}`;

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectOption = (option: string) => {
      // Implement selection logic
    };

    return {
      isOpen,
      id,
      dropdownId,
      toggleDropdown,
      selectOption,
    };
  },
});
</script>
