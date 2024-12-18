import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Tour } from "@/types";

export const useTourStore = defineStore("tour", {
  state: () => ({
    tours: [] as Tour[],
    tour: null as Tour | null,
  }),

  actions: {
    async createTour(createTourDto: Partial<Tour>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/tours", createTourDto);
        this.tours.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Tour successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the tour",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllTours() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/tours");
        this.tours = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching tours",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchTourById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/tours/${id}`);
        this.tour = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the tour",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateTour(id: number, updateTourDto: Partial<Tour>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/tours/${id}`, updateTourDto);
        const updatedTour = response.data.data;
        this.tours = this.tours.map((tour) =>
          tour.id === id ? updatedTour : tour
        );
        if (this.tour && this.tour.id === id) {
          this.tour = updatedTour;
        }
        ElNotification({
          type: "success",
          message: "Tour successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the tour",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteTour(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/tours/${id}`);
        this.tours = this.tours.filter((tour) => tour.id !== id);
        ElNotification({
          type: "success",
          message: "Tour successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the tour",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getTourById: (state) => (id: number) =>
      state.tours.find((tour) => tour.id === id),
  },
});
