import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import api from "@/services/api";
import router from "@/router";
import { useUiStore } from "./useUiStore";
import { Image } from "@/types";

export const useImageStore = defineStore("image", {
  state: () => ({
    images: [] as Image[],
  }),

  actions: {
    async getImagesForEntity(entityType: string, entityId: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.get(`/images/${entityType}/${entityId}`);
        this.images = response.data.data;
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while fetching images",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async createImage(createImageDto: Partial<Image>) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        const response = await api.post("/images", createImageDto);
        this.images.push(response.data.data);
        ElNotification({
          type: "success",
          message: "Image successfully created",
        });
        router.push("/");
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while creating the image",
        });
      } finally {
        uiStore.hideLoader();
      }
    },

    async removeImage(imageId: string) {
      const uiStore = useUiStore();
      uiStore.showLoader();
      try {
        await api.delete(`/images/${imageId}`);
        this.images = this.images.filter((image) => image.id !== imageId);
        ElNotification({
          type: "success",
          message: "Image successfully deleted",
        });
      } catch (error: any) {
        ElNotification({
          type: "error",
          message:
            error.response?.data?.message ||
            "An error occurred while deleting the image",
        });
      } finally {
        uiStore.hideLoader();
      }
    },
  },

  getters: {
    getImagesByEntity: (state) => (entityType: string, entityId: string) => {
      return state.images.filter(
        (image) =>
          image.entityType === entityType && image.entityId === entityId
      );
    },
  },
});
