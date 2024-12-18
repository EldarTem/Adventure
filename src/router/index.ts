import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "",
        component: () => import("@/views/AuthView.vue"),
      },
    ],
  },

  {
    path: "/",
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/home",
        name: "HomePage",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "/favorites",
        name: "FavoritesPage",
        component: () => import("@/views/FavoritesView.vue"),
      },
      {
        path: "/tours",
        name: "ToursPage",
        component: () => import("@/views/ToursView.vue"),
      },
      {
        path: "/tour",
        name: "TourPage",
        component: () => import("@/views/TourView.vue"),
      },
      {
        path: "/products",
        name: "ProductPage",
        component: () => import("@/views/ProductsView.vue"),
      },
      {
        path: "/search",
        name: "SearchPage",
        component: () => import("@/views/SearchView.vue"),
      },
      {
        path: "/profile",
        name: "AccountPage",
        component: () => import("@/views/AccountView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
