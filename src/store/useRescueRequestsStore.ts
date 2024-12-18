import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { RescueRequest } from "@/types";

export const useRescueRequestStore = defineStore("rescueRequest", {
  state: () => ({
    rescueRequests: [] as RescueRequest[],
    rescueRequest: null as RescueRequest | null,
  }),

  actions: {
    async createRescueRequest(createRescueRequestDto: Partial<RescueRequest>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post(
          "/rescue-requests",
          createRescueRequestDto
        );
        this.rescueRequests.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Rescue request successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the rescue request",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchAllRescueRequests() {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get("/rescue-requests");
        this.rescueRequests = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching rescue requests",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async fetchRescueRequestById(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/rescue-requests/${id}`);
        this.rescueRequest = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching the rescue request",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async updateRescueRequest(
      id: string,
      updateRescueRequestDto: Partial<RescueRequest>
    ) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.patch(
          `/rescue-requests/${id}`,
          updateRescueRequestDto
        );
        const updatedRescueRequest = response.data.data;
        this.rescueRequests = this.rescueRequests.map((rescueRequest) =>
          rescueRequest.id === id ? updatedRescueRequest : rescueRequest
        );
        if (this.rescueRequest && this.rescueRequest.id === id) {
          this.rescueRequest = updatedRescueRequest;
        }
        ElNotification({
          type: "success",
          message: "Rescue request successfully updated",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while updating the rescue request",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async deleteRescueRequest(id: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/rescue-requests/${id}`);
        this.rescueRequests = this.rescueRequests.filter(
          (rescueRequest) => rescueRequest.id !== id
        );
        ElNotification({
          type: "success",
          message: "Rescue request successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the rescue request",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getRescueRequestById: (state) => (id: string) =>
      state.rescueRequests.find((rescueRequest) => rescueRequest.id === id),
  },
});
