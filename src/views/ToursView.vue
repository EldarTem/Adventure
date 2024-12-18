<template>
  <div
    class="flex relative gap-5 items-start px-20 pb-12 w-full max-md:px-5 max-md:max-w-full"
  >
    <SearchFilters
      class="flex z-0 gap-2.5 items-center min-w-[240px] w-[280px]"
    />
    <SearchResults
      class="flex z-0 flex-wrap gap-3.5 justify-center items-center min-w-[240px] w-[1051px] max-md:max-w-full"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchFilters from "@/components/SidebarFilter.vue";
import SearchResults from "@/components/TourCard.vue";

export default defineComponent({
  name: "ToursView",
  components: {
    SearchFilters,
    SearchResults,
  },
});
</script>
