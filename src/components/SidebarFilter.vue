<template>
  <div
    class="flex flex-col self-stretch p-5 my-auto bg-white rounded-xl min-w-[240px] shadow-[0px_4px_10px_rgba(0,0,0,0.11)] w-[280px]"
  >
    <FilterSection
      title="Тип"
      :selected="['Походы']"
      :options="[
        'Экскурсии',
        'Походы',
        'Сафари',
        'Мастер-классы',
        'Водные мероприятия',
      ]"
    />

    <FilterSection
      title="Дата"
      :selected="['01.10.2024 - 10.10.2024']"
      :options="[]"
    />

    <FilterSection
      title="Продолжительность"
      :selected="['1-2 дня', '2-7 дней']"
      :options="['До 24 часов', '1-2 дня', '2-7 дней', 'Более недели']"
    />

    <FilterSection
      title="Формат"
      :selected="['Группа']"
      :options="['Индивидуально', 'Группа']"
    />

    <PriceFilter title="Цена" :min="0" :max="60000" />

    <DifficultyFilter title="Сложность" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterSection from "./FilterSection.vue";
import PriceFilter from "./PriceFilter.vue";
import DifficultyFilter from "./DifficultyFilter.vue";

export default defineComponent({
  name: "SearchFilters",
  components: {
    FilterSection,
    PriceFilter,
    DifficultyFilter,
  },
});
</script>
