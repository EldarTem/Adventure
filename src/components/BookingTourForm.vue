<script lang="ts">
import { defineComponent } from 'vue'
import { RecommendedProduct } from './RecommendedProduct.vue'

interface BookingFormData {
  tickets: number
  name: string
  age: number
  phone: string
  email: string
  date: string
  time: string
}

export default defineComponent({
  name: 'BookingTourForm',
  components: {
    RecommendedProduct
  },
  data(): { formData: BookingFormData; total: number } {
    return {
      formData: {
        tickets: 1,
        name: 'Александр Смирнов',
        age: 20,
        phone: '+79785344415',
        email: 'sasha@gmail.com',
        date: '01.10.2024',
        time: '12:00'
      },
      total: 6000
    }
  },
  methods: {
    handleSubmit() {
      // Form submission logic
    }
  }
})
</script>

<template>
  <div class="flex relative flex-col flex-1 shrink px-11 py-9 w-full basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
    <form @submit.prevent="handleSubmit" class="flex z-0 flex-col w-full max-md:max-w-full">
      <h1 class="self-start text-4xl font-semibold leading-none text-black text-opacity-70">
        бронирование тура
      </h1>
      
      <h2 class="mt-8 text-2xl font-medium leading-none text-black text-opacity-70">
        введите данные
      </h2>

      <div class="flex flex-wrap gap-6 items-start mt-8 w-full max-md:max-w-full">
        <div class="flex flex-col grow shrink min-w-[240px] w-[303px]">
          <div class="flex flex-col w-full">
            <label for="tickets" class="text-sm leading-none text-black text-opacity-70">
              Количество билетов
            </label>
            <input 
              id="tickets"
              v-model="formData.tickets"
              type="number"
              class="flex overflow-hidden gap-10 items-start px-4 py-3 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
              aria-label="Количество билетов"
            />
          </div>

          <div class="flex flex-col mt-2.5 w-full">
            <label for="name" class="text-sm leading-none text-black text-opacity-70">
              Имя и фамилия
            </label>
            <input 
              id="name"
              v-model="formData.name"
              type="text"
              class="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
              aria-label="Имя и фамилия"
            />
          </div>

          <div class="flex flex-col mt-2.5 w-full">
            <label for="age" class="text-sm leading-none text-black text-opacity-70">
              Возраст
            </label>
            <input 
              id="age"
              v-model="formData.age"
              type="number"
              class="flex overflow-hidden gap-10 px-4 py-3 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
              aria-label="Возраст"
            />
          </div>

          <div class="flex flex-col mt-2.5 w-full">
            <label for="phone" class="text-sm leading-none text-black text-opacity-70">
              Телефон
            </label>
            <input 
              id="phone"
              v-model="formData.phone"
              type="tel"
              class="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
              aria-label="Телефон"
            />
          </div>

          <div class="flex flex-col mt-2.5 w-full">
            <label for="email" class="text-sm leading-none text-black text-opacity-70">
              Электронная почта
            </label>
            <input 
              id="email"
              v-model="formData.email"
              type="email"
              class="flex overflow-hidden gap-5 justify-between px-4 py-3 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
              aria-label="Электронная почта"
            />
          </div>
        </div>

        <div class="flex flex-col grow shrink min-w-[240px] w-[303px]">
          <div class="flex flex-col">
            <div class="flex flex-col w-full max-w-[379px]">
              <label for="date" class="text-sm leading-none text-black text-opacity-70">
                Дата
              </label>
              <input 
                id="date"
                v-model="formData.date"
                type="date"
                class="flex overflow-hidden gap-5 justify-between py-2.5 pr-3 pl-1.5 mt-1 w-full bg-white rounded border border-solid border-zinc-200"
                aria-label="Дата"
              />
            </div>

            <div class="flex flex-col mt-2.5 max-w-full w-[379px]">
              <label for="time" class="text-sm leading-none text-black text-opacity-70">
                Время
              </label>
              <input 
                id="time"
                v-model="formData.time"
                type="time"
                class="flex overflow-hidden gap-10 justify-center px-3 py-3 w-full bg-white rounded border border-solid border-zinc-200"
                aria-label="Время"
              />
            </div>
          </div>
        </div>
      </div>

      <h2 class="mt-8 text-2xl font-medium leading-none text-black text-opacity-70">
        добавьте рекомендуемые товары
      </h2>

      <div class="flex flex-wrap gap-3.5 items-start mt-8 w-full text-black text-opacity-70 max-md:max-w-full">
        <RecommendedProduct 
          v-for="product in recommendedProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="z-0 self-center mt-10 text-4xl font-medium leading-none text-black text-opacity-70">
        Итого: {{ total }} ₽
      </div>

      <button 
        type="submit"
        class="flex z-0 flex-col self-center mt-10 px-7 py-3 max-w-full text-base leading-none text-white whitespace-nowrap w-[334px] rounded-xl bg-stone-600"
        aria-label="Забронировать"
      >
        Забронировать
      </button>
    </form>

    <button
      class="absolute top-5 right-5 z-0"
      aria-label="Закрыть"
    >
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/63a2ba82d62b6a39c24036a67e98b6f6dd66f2f0a7dc4aac85c8cad3936a2a47?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
        alt=""
        class="object-contain aspect-square h-[30px] w-[30px]"
      />
    </button>
  </div>
</template>