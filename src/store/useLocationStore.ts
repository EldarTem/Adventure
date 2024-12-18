import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Location } from "@/types";

export const useLocationStore = defineStore("location", {
  state: () => ({
    locations: [] as Location[],
    location: null as Location | null,
  }),

  actions: {
    async createLocation(createLocationDto: Partial<Location>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/locations", createLocationDto);
        this.locations.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Location successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the location",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllLocations() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/locations");
        this.locations = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching locations",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchLocationById(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/locations/${id}`);
        this.location = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the location",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateLocation(id: number, updateLocationDto: Partial<Location>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(`/locations/${id}`, updateLocationDto);
        const updatedLocation = response.data.data;
        this.locations = this.locations.map((location) =>
          location.id === id ? updatedLocation : location
        );
        if (this.location && this.location.id === id) {
          this.location = updatedLocation;
        }
        ElNotification({
          type: "success",
          message: "Location successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the location",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteLocation(id: number) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/locations/${id}`);
        this.locations = this.locations.filter(
          (location) => location.id !== id
        );
        ElNotification({
          type: "success",
          message: "Location successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the location",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getLocationById: (state) => (id: number) =>
      state.locations.find((location) => location.id === id),
  },
});
