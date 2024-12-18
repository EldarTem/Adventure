<template>
  <div class="flex overflow-hidden relative flex-col bg-neutral-100">
    <form
      class="main-bg flex z-0 flex-col items-start px-20 pt-60 w-full min-h-[661px] max-md:px-5 max-md:pt-24 max-md:max-w-full"
      @submit.prevent="handleSearch"
    >
      <div class="flex flex-col max-w-full text-white w-[1224px]">
        <h1
          class="text-7xl font-semibold leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-10"
        >
          adventure - сервис для поиска гидов и туристов
        </h1>
        <p class="mt-4 text-2xl font-medium leading-8 max-md:max-w-full">
          Отправляйтесь в путешествие вместе с нами! Какое место вы хотите
          посетить?
        </p>
      </div>
      <div
        class="flex gap-2.5 items-center mt-8 whitespace-nowrap max-md:max-w-full"
      >
        <div class="relative">
          <label for="location" class="sr-only">Выберите место</label>
          <input
            type="text"
            id="location"
            v-model="location"
            class="flex overflow-hidden gap-10 justify-between items-center self-stretch px-4 py-3 my-auto w-80 text-sm tracking-normal leading-loose bg-white rounded-xl max-h-[48px] min-w-[240px] text-black text-opacity-70"
            placeholder="Место"
            aria-label="Выберите место для путешествия"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f08be479c6f5f0371f8fceb38a6f16b46a88b532123b0984ab8615fc2e2a7798?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
            alt=""
            class="absolute right-4 top-1/2 transform -translate-y-1/2 object-contain w-5 aspect-square"
            aria-hidden="true"
          />
        </div>
        <button
          type="submit"
          class="gap-2.5 self-stretch px-7 py-4 my-auto text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2"
        >
          Найти
        </button>
      </div>
    </form>
    <div
      class="flex z-0 flex-col px-20 py-12 w-full max-md:px-5 max-md:max-w-full"
    >
      <h1
        class="text-6xl font-semibold leading-none text-black text-opacity-70 max-md:max-w-full max-md:text-4xl"
      >
        почему выбирают нас?
      </h1>
      <div
        class="flex flex-wrap gap-3.5 items-start mt-8 w-full text-neutral-600 max-md:max-w-full"
      >
        <!-- Компоненты карточек -->
        <template v-for="(card, index) in cards" :key="card.title">
          <WhyChooseUsCard v-bind="card" />

          <!-- Картинка после второго компонента -->
          <img
            v-if="index === 1"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c424ee1977bf65f961443525c7ac0b57a4feb99c9123c45ffd2545a794aacf?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
            alt="Scenic landscape showcasing travel destinations"
            class="object-contain flex-1 shrink rounded-xl aspect-[0.91] basis-20 max-h-[248px] w-[227px]"
          />
        </template>
      </div>
    </div>

    <div
      class="flex z-0 flex-col items-end px-20 py-12 w-full max-md:px-5 max-md:max-w-full"
    >
      <div
        class="flex flex-col justify-center items-end leading-none text-black text-opacity-70 max-md:max-w-full"
      >
        <h1 class="text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
          выбери свое приключение
        </h1>
        <h2 class="mt-3 text-2xl max-md:max-w-full">
          лучшие туры и маршруты для вашего идеального путешествия
        </h2>
      </div>

      <div
        class="flex flex-wrap gap-3.5 items-start self-stretch mt-8 w-full max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0dc982d062a16daea55c4c22e2c93dd95ea9275a05e439a65cbb1d4a0093285?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Featured adventure highlight"
          class="object-contain flex-1 shrink rounded-xl aspect-[0.66] basis-0 max-h-[436px] min-w-[240px] w-[287px]"
        />

        <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
      <div class="flex">
        <button
          class="gap-2.5 self-stretch px-7 py-3 mt-8 text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
          @click="showAll"
          tabindex="0"
        >
          Показать всё
        </button>
      </div>
    </div>
    <div
      class="flex z-0 flex-col items-start px-20 py-12 w-full text-black text-opacity-70 max-md:px-5 max-md:max-w-full"
    >
      <div class="flex flex-col justify-center leading-none max-md:max-w-full">
        <h1 class="text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
          приобретай все необходимое
        </h1>
        <p class="mt-3 text-2xl max-md:max-w-full">
          приобретай памятные сувениры и необходимое снаряжение
        </p>
      </div>
      <div
        class="flex flex-wrap gap-3.5 items-start self-stretch mt-8 w-full max-md:max-w-full"
      >
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :title="product.title"
          :seller="product.seller"
          :seller-image="product.sellerImage"
          :price="product.price"
          :favorite-icon="product.favoriteIcon"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/890963202ea939bba2538fecdba8d63e3519ff1093789c6d621562beafd4f207?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Promotional banner"
          class="object-contain flex-1 shrink w-full rounded-xl aspect-[1.47] basis-0 min-h-[369px] min-w-[240px] max-md:max-w-full"
        />
      </div>
      <div class="flex">
        <button
          class="gap-2.5 self-stretch px-7 py-3 mt-8 text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
        >
          Показать всё
        </button>
      </div>
    </div>
    <div
      class="main-home-last-bg flex relative flex-col items-start mx-20 mb-20 pt-7 pb-96 rounded-xl min-h-[513px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
      role="main"
      aria-label="Adventure authentication section"
    >
      <div
        class="flex z-0 flex-col justify-center text-white max-md:max-w-full"
        role="heading"
        aria-level="1"
      >
        <div class="text-5xl font-semibold max-md:max-w-full max-md:text-4xl">
          присоединяйся к adventure
        </div>
        <div class="mt-3 text-lg max-md:max-w-full">
          авторизуйся и начни свое путешествие уже сейчас!
        </div>
      </div>
      <div
        class="flex absolute right-10 bottom-10 z-0 flex-col max-w-full text-base rounded-xl h-[101px] text-black text-opacity-70 w-[404px]"
        role="navigation"
        aria-label="Adventure features"
      >
        <div class="flex gap-5 w-full">
          <button
            class="gap-2.5 self-stretch px-7 py-3 rounded-xl bg-white bg-opacity-50 max-md:px-5"
            tabindex="0"
            @click="onAuthClick"
          >
            создавай туры
          </button>
          <button
            class="gap-2.5 self-stretch px-7 py-3 rounded-xl bg-white bg-opacity-50 max-md:px-5"
            tabindex="0"
            @click="onAuthClick"
          >
            бронируй маршруты
          </button>
        </div>
        <button
          class="gap-2.5 self-end px-7 py-3 mt-4 rounded-xl bg-white bg-opacity-50 max-md:px-5"
          tabindex="0"
          @click="onAuthClick"
        >
          находи уникальные впечатления
        </button>
      </div>
    </div>
    <!-- Rest of the template remains exactly the same, just with proper accessibility attributes added to images and interactive elements -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import WhyChooseUsCard from "@/components/WhyChooseUsCard.vue";
import TourCard from "@/components/TourCard.vue";
import ProductCard from "@/components/ProductCard.vue";
interface Product {
  id: number;
  image: string;
  title: string;
  seller: string;
  sellerImage: string;
  price: number;
  favoriteIcon: string;
}

export default defineComponent({
  name: "AdventureLanding",
  components: {
    WhyChooseUsCard,
    TourCard,
    ProductCard,
  },
  data() {
    return {
      cards: [
        {
          icon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/2f7cbf9aad0aee581a407984cd83386b13eac540c4c8f147409d9cf04589351f?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Безопасность",
          description:
            "Безопасность в турах и походах благодаря интеграции с МЧС.",
          iconAlt: "Safety icon representing tour and hiking security",
        },
        {
          icon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/29c0b8dfe5e2f886fe65e94c3cd35f5f24efefedd21a29dc3ce92681c44f1749?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Персонализация",
          description: "Разрабатывайте и продвигайте авторские маршруты.",
          iconAlt: "Personalization icon showing custom route development",
        },
        {
          icon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/0de9a19d4ed67db33a8251c58084f62d44cbc1ba1cdb5d2c4a563865b093ae28?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Удобство",
          description: "Бронирование туров и товаров в несколько кликов.",
          iconAlt: "Convenience icon illustrating easy booking process",
        },
      ],
      tours: [
        {
          id: 1,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6374baa3f11173fbc39d734fec1d4e858ea95e967b3bd10debda05deb98e6729?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Путешествие на Ай-Петри",
          locationIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/93f20e6eb7c5875e5662fd973b98a3a32a856af573725f08f0a8aa733c59236c?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          location: "Ялта",
          description:
            "Экскурсия на закат на Ай-Петри пожалуй, самая романтичная из всех наших программ. По дороге остановимся у Черепашьего прудика, заедем к водопаду Учан-Су, прогуляемся к Серебряной беседке.",
          type: "групповая",
          duration: "6 часов",
          mode: "пешком",
          price: 6000,
          actionImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3574c4c3ab90153cad9b34f0b4c0955d8cc4f50493d80625fce9ea0393fa401b?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          rating: 4.5,
          ratingIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a1638476f3414346f28e0afe0f57c5be26dc3b7edbc1bb8a6495699e72c3b182?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 2,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6374baa3f11173fbc39d734fec1d4e858ea95e967b3bd10debda05deb98e6729?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Путешествие на Ай-Петри",
          locationIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/93f20e6eb7c5875e5662fd973b98a3a32a856af573725f08f0a8aa733c59236c?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          location: "Ялта",
          description:
            "Экскурсия на закат на Ай-Петри пожалуй, самая романтичная из всех наших программ. По дороге остановимся у Черепашьего прудика, заедем к водопаду Учан-Су, прогуляемся к Серебряной беседке.",
          type: "групповая",
          duration: "6 часов",
          mode: "пешком",
          price: 6000,
          actionImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/251e8d71fe9465b05597053ddfc316b5ff0bfdf8585a37c9a578c85982b86925?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          rating: 4.5,
          ratingIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a1638476f3414346f28e0afe0f57c5be26dc3b7edbc1bb8a6495699e72c3b182?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 3,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6374baa3f11173fbc39d734fec1d4e858ea95e967b3bd10debda05deb98e6729?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Путешествие на Ай-Петри",
          locationIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/93f20e6eb7c5875e5662fd973b98a3a32a856af573725f08f0a8aa733c59236c?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          location: "Ялта",
          description:
            "Экскурсия на закат на Ай-Петри пожалуй, самая романтичная из всех наших программ. По дороге остановимся у Черепашьего прудика, заедем к водопаду Учан-Су, прогуляемся к Серебряной беседке.",
          type: "групповая",
          duration: "6 часов",
          mode: "пешком",
          price: 6000,
          actionImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/5e597a089c38bb3bedffab68e7448cd88aa51e17e30256196a50b12e871348cc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          rating: 4.5,
          ratingIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a1638476f3414346f28e0afe0f57c5be26dc3b7edbc1bb8a6495699e72c3b182?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
      ],
      products: [
        {
          id: 1,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/dc176b9946d98a84a91646a3305ce2eea63265b86aa3d121311236948add1543?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Термокружка сувенирная",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d15bc9aa38287987ae60a410b4bf0ef7bf29887d4690e97998760ceb9c4456dc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          price: 6000,
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 2,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6d3f7e496a2cd866a2483b640e32f27f52eebf19d3a6ad61185808876d87bbae?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Карабин",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d664775e24f06f18a5063eb9f207d757b69df5ad0125beeae3a761eece38e123?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          price: 6000,
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 3,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d47b6a006a83629d6ab1708d2e35741e9b07d41126c157208eeac17cd8d0d7fd?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          title: "Рюкзак походный",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/7aa37c1019da9e82db034729172728a70a2a7ccdee1468f52d1ea3fa85c295ba?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          price: 6000,
          favoriteIcon:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
      ] as Product[],
    };
  },
  setup() {
    const location = ref("");

    const handleSearch = () => {
      if (location.value) {
        // Handle search logic here
      }
    };

    return {
      location,
      handleSearch,
    };
  },
});
</script>

<style scoped>
.main-bg {
  background-image: url("../assets/img/MainBG.png");
  background-size: cover; /* Настройте по необходимости */
  background-position: center; /* Настройте по необходимости */
  background-repeat: no-repeat; /* Настройте по необходимости */
}
.main-home-last-bg {
  background-image: url("../assets/img/HomeLasrBlock.png");
  background-size: cover; /* Настройте по необходимости */
  background-position: center; /* Настройте по необходимости */
  background-repeat: no-repeat; /* Настройте по необходимости */
}
</style>
