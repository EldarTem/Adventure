import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Favorite } from "@/types";

export const useFavoriteStore = defineStore("favorite", {
  state: () => ({
    favorites: [] as Favorite[],
    favorite: null as Favorite | null,
  }),

  actions: {
    async createFavorite(createFavoriteDto: Partial<Favorite>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/favorites", createFavoriteDto);
        this.favorites.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Favorite successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the favorite",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllFavorites() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/favorites");
        this.favorites = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching favorites",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchFavoriteById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/favorites/${id}`);
        this.favorite = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the favorite",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateFavorite(id: number, updateFavoriteDto: Partial<Favorite>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/favorites/${id}`, updateFavoriteDto);
        const updatedFavorite = response.data.data;
        this.favorites = this.favorites.map((favorite) =>
          favorite.id === id ? updatedFavorite : favorite
        );
        if (this.favorite && this.favorite.id === id) {
          this.favorite = updatedFavorite;
        }
        ElNotification({
          type: "success",
          message: "Favorite successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the favorite",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteFavorite(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/favorites/${id}`);
        this.favorites = this.favorites.filter(
          (favorite) => favorite.id !== id
        );
        ElNotification({
          type: "success",
          message: "Favorite successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the favorite",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getFavoriteById: (state) => (id: number) =>
      state.favorites.find((favorite) => favorite.id === id),
  },
});
