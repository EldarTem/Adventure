<template>
  <div
    class="flex flex-col px-20 pt-10 pb-12 w-full max-md:px-5 max-md:max-w-full mt-20"
    role="main"
    aria-label="Tour Details"
  >
    <div
      class="flex flex-wrap gap-3.5 items-start w-full max-md:max-w-full h-[472px]"
    >
      <div
        class="flex flex-wrap gap-3 items-start min-w-[240px] w-[472px] max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d67f1b02846a6aea18a102c52fa126f1f8b67a689244e86cca1c3e61eaf9f9e1?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain grow shrink rounded-xl aspect-[1.52] min-h-[311px] min-w-[240px] w-[442px] max-md:max-w-full"
          alt="Main view of Ai-Petri mountain"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1a2a4eef2c3158f1d668b06158434a10c5da9911c6fb32ba79bdc1aab89740?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain shrink-0 rounded-xl aspect-square min-h-[149px] w-[149px]"
          alt="Scenic view of Ai-Petri"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1a2a4eef2c3158f1d668b06158434a10c5da9911c6fb32ba79bdc1aab89740?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain shrink-0 rounded-xl aspect-square min-h-[149px] w-[149px]"
          alt="Additional view of Ai-Petri landscape"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f1a2a4eef2c3158f1d668b06158434a10c5da9911c6fb32ba79bdc1aab89740?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain shrink-0 rounded-xl aspect-square min-h-[149px] w-[149px]"
          alt="Another perspective of Ai-Petri"
        />
      </div>
      <div
        class="flex relative flex-col flex-1 shrink items-start px-10 pt-5 pb-8 bg-gray-200 rounded-xl basis-0 min-w-[240px] text-black text-opacity-70 max-md:px-5 max-md:max-w-full h-full"
      >
        <div class="flex z-0 flex-col self-stretch w-full max-md:max-w-full">
          <h1
            class="self-start text-3xl font-semibold leading-none text-center max-md:max-w-full"
          >
            Путешествие на Ай-Петри
          </h1>
          <p class="mt-2.5 text-xl leading-6 max-md:max-w-full">
            Экскурсия на закат на Ай-Петри пожалуй, самая романтичная из всех
            наших программ. По дороге остановимся у Черепашьего прудика, заедем
            к водопаду Учан-Су, прогуляемся к Серебряной беседке. И уже перед
            самым закатом поднимемся на смотровую площадку у самый короны
            Ай-Петри. На закате мы откроем шампанское и будем ждать, когда
            загорятся огни ночной Ялты.
          </p>
        </div>
        <div
          class="flex z-0 flex-col items-start mt-5 max-w-full text-xl w-[290px]"
        >
          <div class="flex gap-2.5 items-start leading-none">
            <span>Сложность:</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbe9f6baab791abf746ae25929d81a2a685b228cb6d294c27d2390107be6f405?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
              class="object-contain shrink-0 aspect-[5] min-h-[21px] w-[105px]"
              alt="Difficulty level indicator"
            />
          </div>
          <div class="self-stretch mt-2.5 leading-none">
            Продолжительность: 6 часов
          </div>
          <div class="mt-2.5 leading-none">Город: Ялта</div>
          <div class="flex gap-3.5 items-start mt-2.5">
            <span class="leading-none">Рейтинг:</span>
            <div class="flex gap-1.5 items-center whitespace-nowrap">
              <span class="self-stretch my-auto">4.5</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad0c446322a91f1daa68be6d75f76c451faf9c43417ca3d4244bc1dc47180f5b?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                class="object-contain shrink-0 self-stretch my-auto aspect-[1.06] w-[19px]"
                alt="Rating star"
              />
            </div>
          </div>
          <div class="mt-3.5 text-2xl font-semibold leading-none">
            Цена: 6 000 ₽
          </div>
        </div>
        <div class="flex">
          <button
            class="gap-2.5 self-stretch px-7 py-3 mt-5 text-base leading-none text-white whitespace-nowrap rounded-xl bg-stone-600 max-md:px-5 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500"
            aria-label="Забронировать тур на Ай-Петри"
          >
            Забронировать
          </button>
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/68ad06f0c20d0b2f754271fc39992ec250c883f6a618b10eb2dc5a36162ff389?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain absolute top-5 right-10 z-0 aspect-[1.1] h-[30px] w-[33px]"
          alt=""
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5adaf8e44a02ee5e50ee5f613bc3aaa8a249ea0da8f84236fb77d2884d62b661?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          class="object-contain absolute right-10 z-0 max-w-full rounded-xl aspect-[1.88] bottom-[30px] h-[215px] w-[405px]"
          alt="Tour route map"
        />
      </div>
    </div>
  </div>

  <div
    class="flex flex-col self-center px-20 py-12 w-full max-md:px-5 max-md:max-w-full"
    role="main"
    aria-label="Tour Information Section"
  >
    <h1
      class="text-6xl font-semibold leading-none text-black text-opacity-70 max-md:max-w-full max-md:text-4xl"
    >
      информация о туре
    </h1>
    <div class="flex flex-wrap gap-5 items-start mt-8 w-full max-md:max-w-full">
      <div class="flex flex-wrap gap-5 items-start mt-8 justify-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0062af4c14bfd9350a56813173548264bace761094ee452ccc850eeac94066dc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt="Tour guide profile"
          class="object-contain grow shrink rounded-xl aspect-square min-w-[300px] w-[355px] heigh-355"
        />
        <div
          class="flex heigh-355 grow shrink gap-6 items-start px-10 pt-5 pb-14 leading-none bg-gray-200 rounded-xl min-h-[355px] min-w-[240px] text-black text-opacity-70 w-[696px] max-md:px-5 max-md:max-w-full"
        >
          <div
            class="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px] max-md:max-w-full"
          >
            <div class="flex flex-col">
              <div class="flex gap-2.5 items-start text-xl font-bold">
                <div>Анастасия Соколова</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/570ca4cccd2f3c4f71a0f8d01eb5b942a9d2c53e07b0aaa3b93be2356333d5d4?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Verification badge"
                  class="object-contain shrink-0 w-6 aspect-square"
                />
              </div>
              <div class="mt-1 text-sm">@nastya_guide23</div>
            </div>
            <div class="self-stretch mt-5 text-lg leading-6 max-md:max-w-full">
              Привет! Я - Анастасия, ваш персональный гид в мире приключений. С
              моим опытом и знаниями местных достопримечательностей, каждое ваше
              путешествие станет неповторимым и захватывающим.
            </div>
            <div
              class="flex flex-col items-start mt-5 max-w-full text-lg whitespace-nowrap w-[195px]"
            >
              <h2 class="font-semibold">Контакты:</h2>
              <div class="flex gap-3 items-center mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/38634384ca2d437c00a38b4137542aa70466d89afb3c585396d7b45722c866e1?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Phone icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
                />
                <a
                  href="tel:+79784088275"
                  class="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >+79784088275</a
                >
              </div>
              <div class="flex gap-3 items-center self-stretch mt-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/68316857224a90fca26d447f07a54c2e013c6580debb4b3479ee7d7ffd3c5d1e?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Email icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
                />
                <a
                  href="mailto:anastasiya@mail.ru"
                  class="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >anastasiya@mail.ru</a
                >
              </div>
              <div class="flex gap-3 items-center mt-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f58b5e60dc6e4c6f716351a91e348d5409d923bc4d1056da7db8ac18f439181?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Telegram icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[19px]"
                />
                <a
                  href="https://t.me/nastya_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="self-stretch my-auto hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >@nastya_guide</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap grow shrink gap-5 items-center min-w-[240px] w-[1281px] max-md:max-w-full justify-end"
      >
        <div
          class="flex heigh-355 gap-6 items-start self-stretch px-10 pt-5 pb-32 my-auto leading-none bg-gray-200 rounded-xl min-h-[355px] min-w-[240px] w-[415px] max-md:px-5 max-md:pb-24"
        >
          <div
            class="flex flex-col flex-1 shrink items-start w-full basis-0 min-w-[240px]"
          >
            <h2
              class="flex flex-col text-4xl font-bold whitespace-nowrap text-black text-opacity-70"
            >
              включено
            </h2>
            <ul
              class="flex flex-col items-start mt-5 text-xl text-neutral-600"
              role="list"
            >
              <li class="flex gap-4 items-center whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/369ce91a0ae8595510024246cf170274645b838e2b2e69df4d40c2c8affe50de?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Transfer icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                />
                <span class="self-stretch my-auto">Трансфер</span>
              </li>
              <li class="flex gap-4 items-center mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2d9fb464f0ccf30d49aed590c7acd7699fc8274cb1d3b81fce74a6991c597eb?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Food icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                />
                <span class="self-stretch my-auto">Еда на маршруте</span>
              </li>
              <li class="flex gap-4 items-center mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/95bc50d9f33308c09aaf7535245f38857cf420dbdbd17c4c7d737761c9b36b2d?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Photo icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                />
                <span class="self-stretch my-auto">Фото с маршрута</span>
              </li>
              <li class="flex gap-4 items-center self-stretch mt-4">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b40a0bd9a190472e2e4a7f26c4f0779e46747f19164bc2e60fa69a61d4083df?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Pass icon"
                  class="object-contain shrink-0 self-stretch my-auto aspect-square w-[25px]"
                />
                <span class="self-stretch my-auto">Пропуск в заповедник</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="flex heigh-355 gap-6 items-start self-stretch px-10 pt-5 pb-56 my-auto bg-gray-200 rounded-xl min-h-[355px] min-w-[240px] w-[415px] max-md:px-5 max-md:pb-24"
        >
          <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
            <h2
              class="flex flex-col self-start text-4xl font-bold leading-none text-black text-opacity-70"
            >
              не включено
            </h2>
            <ul
              class="flex flex-col mt-5 w-full text-xl leading-6 text-neutral-600"
              role="list"
            >
              <li class="flex gap-4 items-start w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a07dde5cd7d2f58088a8eeb023504830052b72d632f399bcb4abe56a6faa84d8?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
                  alt="Not included icon"
                  class="object-contain shrink-0 aspect-square w-[25px]"
                />
                <span class="flex-1 shrink basis-0">
                  Трансфер за пределы указанных городов
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="flex heigh-355 grow shrink gap-6 items-start px-10 pt-5 pb-8 bg-gray-200 rounded-xl min-w-[240px] w-[778px] max-md:px-5 max-md:max-w-full"
      >
        <div
          class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full"
        >
          <h2
            class="flex flex-col self-start text-4xl font-bold leading-none text-black text-opacity-70"
          >
            что вас ожидает
          </h2>
          <div
            class="mt-5 w-full text-xl leading-6 text-neutral-600 max-md:max-w-full"
          >
            Экскурсия на закат на Ай-Петри пожалуй, самая романтичная из всех
            наших программ. Мы поднимемся как раз к тому времени, когда основная
            масса людей начнет спуск. По дороге остановимся у Черепашьего
            прудика, заедем к водопаду Учан-Су, прогуляемся к Серебряной
            беседке.<br />И уже перед самым закатом поднимемся на смотровую
            площадку у самый короны Ай-Петри. На закате мы откроем шампанское и
            приготовимся ждать, когда загорятся огни ночной Ялты. Это очень
            красиво. Если повезет, то можно наблюдать и восход луны и
            потрясающую лунную дорожку. Или своими глазами увидеть, как много
            звезд на Крымском небе.
          </div>
        </div>
      </div>
      <div
        class="flex heigh-355 grow shrink gap-6 items-start px-10 pt-5 pb-24 bg-gray-200 rounded-xl min-h-[330px] min-w-[240px] w-[412px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
      >
        <div class="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
          <h2
            class="flex flex-col self-start text-4xl font-bold leading-none whitespace-nowrap text-black text-opacity-70"
          >
            важно
          </h2>
          <div class="mt-5 w-full text-xl leading-6 text-neutral-600">
            Ай-Петри — вершина, которая характеризуется очень сложными погодными
            условиями, поэтому перед поездкой мы обязательно с вами свяжемся и
            проинструктируем по поводу одежды.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="flex flex-col items-end px-20 py-12 w-full max-md:px-5 max-md:max-w-full"
  >
    <div
      class="flex flex-col justify-center leading-none text-black text-opacity-70 max-md:max-w-full"
    >
      <h1 class="text-6xl font-semibold max-md:max-w-full max-md:text-4xl">
        приобретай все необходимое
      </h1>
      <h2 class="mt-3 text-2xl max-md:max-w-full">
        гид рекомендует эти товары для данного тура
      </h2>
    </div>
    <div
      class="flex flex-wrap gap-3.5 items-start self-stretch mt-8 w-full max-md:max-w-full"
    >
      <div
        class="flex flex-col flex-1 shrink px-10 py-8 rounded-xl basis-0 min-h-[369px] min-w-[240px] max-md:px-5 max-md:max-w-full"
      >
        <div class="flex flex-col flex-1 w-full text-white max-md:max-w-full">
          <h2
            class="text-5xl font-semibold leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]"
          >
            бронируй тур прямо сейчас
          </h2>
          <p class="mt-3 text-lg leading-6 max-md:max-w-full">
            начинай путешествие и получай <br />незабываемые эмоции
          </p>
        </div>
        <button
          @click="handleBookTour"
          class="gap-2.5 self-end px-7 py-4 mt-11 text-xl leading-none rounded-xl bg-white bg-opacity-50 text-black text-opacity-70 max-md:px-5 max-md:mt-10"
        >
          Забронировать тур
        </button>
      </div>

      <div
        v-for="product in products"
        :key="product.id"
        class="flex overflow-hidden relative flex-col w-64 bg-gray-200 rounded-xl min-w-[240px] text-black text-opacity-70"
      >
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="object-contain z-0 w-full aspect-[1.28] min-h-[200px]"
        />
        <div class="flex z-0 flex-col px-6 py-4 w-full max-md:px-5">
          <div class="flex flex-col w-full">
            <h3 class="text-xl font-semibold">{{ product.name }}</h3>
            <div class="flex gap-2 items-center mt-1.5 text-sm">
              <img
                :src="product.sellerImage"
                :alt="product.seller"
                loading="lazy"
                class="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]"
              />
              <div class="self-stretch my-auto w-[188px]">
                {{ product.seller }}
              </div>
            </div>
          </div>
          <div
            class="flex-1 shrink gap-3.5 mt-3.5 w-full text-xl font-semibold"
          >
            {{ product.price }} ₽
          </div>
          <button
            @click="handleAddProduct(product.id)"
            class="gap-2.5 self-stretch px-7 py-2.5 mt-3.5 w-full text-sm leading-none text-white whitespace-nowrap rounded-xl bg-stone-600 min-h-[35px] max-md:px-5"
          >
            Добавить
          </button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/91907e992dd4b990fea84b5cb860ecaa3a964b3dc7a8764a86aa6b5e2cd941fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c"
          alt=""
          loading="lazy"
          class="object-contain absolute top-4 z-0 aspect-[1.16] h-[19px] left-[23px] w-[22px]"
        />
      </div>
    </div>
    <button
      @click="handleShowAll"
      class="gap-2.5 self-stretch px-7 py-3 mt-8 text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
    >
      Показать всё
    </button>
  </div>

  <div
    class="flex flex-col self-center px-20 pb-12 w-full max-md:px-5 max-md:max-w-full"
  >
    <h1
      class="text-6xl font-semibold leading-none text-black text-opacity-70 max-md:text-4xl"
    >
      отзывы
    </h1>
    <div class="flex flex-wrap gap-7 items-start mt-8 w-full max-md:max-w-full">
      <ReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :author-name="review.authorName"
        :username="review.username"
        :avatar-src="review.avatarSrc"
        :rating-src="review.ratingSrc"
        :review-text="review.reviewText"
        :images="review.images"
      />
    </div>
    <button
      class="gap-2.5 self-start px-7 py-3 mt-8 text-base leading-none text-white rounded-xl bg-stone-600 max-md:px-5"
      tabindex="0"
      aria-label="Show all reviews"
    >
      Показать всё
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ReviewCard from "@/components/ReservationCard.vue";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  seller: string;
  sellerImage: string;
}

export default defineComponent({
  name: "TourDetail",
  components: {
    ReviewCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Термокружка сувенирная",
          price: 6000,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/dc176b9946d98a84a91646a3305ce2eea63265b86aa3d121311236948add1543?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/4c96c48ed0ebe71a0edb8afd60b79b5a3bf87abba1e6c8a587a54580f613855e?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 2,
          name: "Карабин",
          price: 6000,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6d3f7e496a2cd866a2483b640e32f27f52eebf19d3a6ad61185808876d87bbae?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/14e7d23d2a18f9b63e57cf29b05aafd24efed8bf3432a13a1d4f73a5e330ea2d?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
        {
          id: 3,
          name: "Рюкзак походный",
          price: 6000,
          image:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d47b6a006a83629d6ab1708d2e35741e9b07d41126c157208eeac17cd8d0d7fd?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          seller: "Анастасия Соколова",
          sellerImage:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/17ee06435496f260c8a68c3bcb79f4e243b319d989e7a303cde08677e98289cd?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
        },
      ],
      reviews: [
        {
          authorName: "Александр Смирнов",
          username: "@sanya_444",
          avatarSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/caf0f2b0bbe26e4def5d7a75043935ac53c90b2d0dc80c1de0a0f333a69d35a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ratingSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/110b1229c9a48e59b289280fbe7b5d3e47c55f84605ef4c4e56b7fcd968d1c43?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          reviewText:
            "Экскурсия с Анастасией по Ай-Петри оказалась невероятным путешествием в мир красоты и приключений! Ее знание местных достопримечательностей и истории было впечатляющим, а ее энтузиазм заразителен. Она создала для нас незабываемый опыт, позволяя нам полностью погрузиться в атмосферу этого уникального места.",
          images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ],
        },
        {
          authorName: "Александр Смирнов",
          username: "@sanya_444",
          avatarSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/caf0f2b0bbe26e4def5d7a75043935ac53c90b2d0dc80c1de0a0f333a69d35a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ratingSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/fd27fdd3b03ec58807686b6f876031af9084bb4666a2394e1710d4fd5ef549fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          reviewText:
            "Экскурсия с Анастасией по Ай-Петри оказалась невероятным путешествием в мир красоты и приключений! Ее знание местных достопримечательностей и истории было впечатляющим, а ее энтузиазм заразителен. Она создала для нас незабываемый опыт, позволяя нам полностью погрузиться в атмосферу этого уникального места.",
          images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ],
        },
        {
          authorName: "Александр Смирнов",
          username: "@sanya_444",
          avatarSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/caf0f2b0bbe26e4def5d7a75043935ac53c90b2d0dc80c1de0a0f333a69d35a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ratingSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/fd27fdd3b03ec58807686b6f876031af9084bb4666a2394e1710d4fd5ef549fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          reviewText:
            "Экскурсия с Анастасией по Ай-Петри оказалась невероятным путешествием в мир красоты и приключений! Ее знание местных достопримечательностей и истории было впечатляющим, а ее энтузиазм заразителен. Она создала для нас незабываемый опыт, позволяя нам полностью погрузиться в атмосферу этого уникального места.",
          images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ],
        },
        {
          authorName: "Александр Смирнов",
          username: "@sanya_444",
          avatarSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/caf0f2b0bbe26e4def5d7a75043935ac53c90b2d0dc80c1de0a0f333a69d35a5?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ratingSrc:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/fd27fdd3b03ec58807686b6f876031af9084bb4666a2394e1710d4fd5ef549fc?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          reviewText:
            "Экскурсия с Анастасией по Ай-Петри оказалась невероятным путешествием в мир красоты и приключений! Ее знание местных достопримечательностей и истории было впечатляющим, а ее энтузиазм заразителен. Она создала для нас незабываемый опыт, позволяя нам полностью погрузиться в атмосферу этого уникального места.",
          images: [
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e90875316b19395bfe88c5dbe1e34ccccf2c6564c2c349bdeac05198be3f6?placeholderIfAbsent=true&apiKey=bce9e32ec8f346b68199cead2525840c",
          ],
        },
      ],
    };
  },
  methods: {
    handleBookTour() {
      this.$emit("book-tour");
    },
    handleAddProduct(productId: number) {
      this.$emit("add-product", productId);
    },
    handleShowAll() {
      this.$emit("show-all");
    },
  },
});
</script>

<style scoped>
.heigh-355 {
  height: 355px;
}
</style>
